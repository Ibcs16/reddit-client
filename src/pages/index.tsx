import { VStack, HStack, Flex, Heading } from '@chakra-ui/react';
import getTimeFromNow from '../utils/getTimeFromNow';
import redditMockedData from '../assets/reddit_mock.json';
import Navigation from '../components/Navigation';
import PostsList from '../components/PostsList';
import PostDetails from '../components/PostDetails';

const Home: React.FC = () => {
  return (
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
      <HStack
        h="100vh"
        w="full"
        maxW={1248}
        spacing={8}
        pt={10}
        px={5}
        overflow="hidden"
        marginX="auto"
        alignItems="flex-start"
      >
        <Flex
          as="main"
          h="full"
          maxH={900}
          maxW="lg"
          w="full"
          flexDir="column"
          overflow="auto"
          pr={5}
        >
          <Heading as="h1" size="lg" mt={10} mb={8}>
            Top
          </Heading>
          <PostsList posts={redditMockedData.map(({ data }) => data)} />
        </Flex>
        <Flex as="aside" h="full" flex={1} w="full" pt={10} pb={2}>
          <PostDetails />
        </Flex>
      </HStack>
    </VStack>
  );
};

export default Home;
