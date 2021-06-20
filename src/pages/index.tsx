import {
  VStack,
  HStack,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { useDragControls, AnimateSharedLayout } from 'framer-motion';
import { setResizeHandle } from '../utils/resizeHandle';
import redditMockedData from '../assets/reddit_mock.json';
import Navigation from '../components/Navigation';
import PostsList from '../components/PostsList';
import { MotionBox } from '../components/MotionBox';
import PostDetails from '../components/PostDetails';
import { IPost } from '../components/PostsList/PostItem';

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
          zIndex={9999}
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
                <Heading as="h1" size="lg" mt={10} mb={8}>
                  Top
                </Heading>
                <PostsList
                  handleSelectPost={handleSelectPost}
                  posts={redditMockedData.map(({ data }) => data)}
                />
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
      <Drawer
        isOpen={drawerAvailable}
        onClose={() => setDrawerAvailable(false)}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <PostsList
              handleSelectPost={handleSelectPost}
              posts={redditMockedData.map(({ data }) => data)}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Home;
