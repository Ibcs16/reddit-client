import {
  VStack,
  HStack,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Spinner,
  Button
} from '@chakra-ui/react';

import { useSWRInfinite } from 'swr';

import { CloseIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useDragControls, AnimateSharedLayout } from 'framer-motion';
import { setResizeHandle } from '../utils/resizeHandle';

import Navigation from '../components/Navigation';
import PostsList, { EmptyPostList } from '../components/PostsList';
import { MotionBox } from '../components/MotionBox';
import PostDetails from '../components/PostDetails';
import { IPost } from '../components/PostsList/PostItem';
import { fetcher } from '../services/api';
import { usePosts } from '../hooks/usePosts';

const Home: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<IPost>({} as IPost);

  const [showPosts, setShowPosts] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  const [drawerAvailable, setDrawerAvailable] = useState(false);

  const handleSelectPost = (post: IPost) => setSelectedPost(post);
  const dragControls = useDragControls();

  const onDragContent = useCallback(
    (event, info) => {
      const xNow = info.offset.x;

      if (xNow > -100 && !isMobile) {
        setShowPosts(true);
      } else if (xNow > -100 && isMobile) {
        setShowPosts(false);
      } else {
        setShowPosts(false);
      }
    },
    [setShowPosts]
  );

  const handleResize = ({ innerWidth }) => {
    if (innerWidth < 560) {
      setIsMobile(true);
      setShowPosts(false);
    } else {
      setIsMobile(false);
      setDrawerAvailable(false);
    }

    if (innerWidth > 1024) {
      setShowPosts(true);
    }
  };

  const handleDismissAllPosts = () => {
    setDrawerAvailable(true);
    setSelectedPost(null);
  };

  const { data, loadMore, isLoadingMore, isLoadingInitialData } =
    usePosts<IPost[]>('top.json?limit=5');

  const posts = data ? [].concat(...data) : [];

  const isEmpty = posts.length === 0 && !isLoadingInitialData;

  useEffect(() => {
    setResizeHandle(handleResize);
  }, []);

  return (
    <>
      <VStack h="100vh" spacing={0}>
        <Flex
          as="header"
          h="full"
          w="full"
          bg="#fff"
          pos="fixed"
          top={0}
          maxH={12}
          p={2}
          borderBottomColor="tertiary.100"
          borderBottomWidth={1}
          zIndex={3}
        >
          <Navigation />
        </Flex>
        <MotionBox h="100vh" w="full">
          <HStack
            maxW={1248}
            spacing={isMobile || !showPosts ? 0 : 8}
            pt={10}
            px={isMobile ? 0 : 5}
            overflowX="visible"
            marginX="auto"
            h="full"
            alignItems="flex-start"
          >
            <AnimateSharedLayout>
              <MotionBox
                as="main"
                id="postsMotionBox"
                h="full"
                maxW="sm"
                w="full"
                flexDir="column"
                overflow="auto"
                layout
                pr={5}
                initial="open"
                animate={showPosts ? 'open' : 'closed'}
                variants={{
                  open: {
                    opacity: 1,
                    position: 'relative',
                    top: 0,
                    left: 0,
                    x: 0
                  },
                  closed: {
                    opacity: 0,

                    top: 0,
                    left: 0,
                    transitionEnd: {
                      position: 'absolute'
                    }
                  }
                }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ right: 0 }}
                dragElastic={0}
                dragMomentum={false}
                onDrag={onDragContent}
                dragControls={dragControls}
              >
                <Flex alignItems="center" justifyContent="space-between">
                  <Heading as="h1" size="lg" mt={10} mb={8}>
                    Top posts
                  </Heading>
                  <Button
                    rounded="sm"
                    leftIcon={<CloseIcon fontSize="1em" />}
                    variant="ghost"
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="medium"
                    onClick={loadMore}
                    display={isEmpty ? 'none' : 'block'}
                  >
                    Dismiss all
                  </Button>
                </Flex>
                {!isEmpty && (
                  <>
                    <PostsList
                      handleSelectPost={handleSelectPost}
                      posts={posts.map((postData) => postData)}
                    />
                  </>
                )}
                {isEmpty && <EmptyPostList />}

                {isLoadingInitialData && <Spinner color="secondary.100" />}

                {!isLoadingInitialData && (
                  <Button
                    rounded="md"
                    variant="solid"
                    fontSize="xs"
                    color="white"
                    fontWeight="medium"
                    onClick={loadMore}
                    alignSelf="center"
                    justifySelf="center"
                    display="block"
                    bg="secondary.100"
                    mb={2}
                    mx="auto"
                    isLoading={isLoadingMore}
                    _hover={{ bg: 'secondary.100', opacity: 0.6 }}
                  >
                    {posts.length > 0 ? 'Load more' : 'Load posts'}
                  </Button>
                )}
              </MotionBox>

              <MotionBox
                layout
                h="full"
                flex={1}
                w="full"
                as="aside"
                maxH={900}
                transition={{ duration: 0.4 }}
              >
                <Flex h="full" w="full" pt={10} pb={2}>
                  <PostDetails post={selectedPost} />
                </Flex>
              </MotionBox>
            </AnimateSharedLayout>
          </HStack>
        </MotionBox>
      </VStack>
      {isMobile && (
        <Drawer
          size="md"
          isOpen={drawerAvailable}
          onClose={() => setDrawerAvailable(false)}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <Heading as="h1" size="lg" mt={10} mb={8}>
                Top posts
              </Heading>
              <PostsList
                handleSelectPost={handleSelectPost}
                posts={posts.map((postData) => postData)}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default Home;
