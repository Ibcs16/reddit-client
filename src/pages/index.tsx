import { VStack, HStack, Flex, Heading } from '@chakra-ui/react';
import getTimeFromNow from '../utils/getTimeFromNow';
import redditMockedData from '../assets/reddit_mock.json';
import Navigation from '../components/Navigation';
import PostsList from '../components/PostsList';

interface IPost {
  data: {
    id: string;
    title: string;
    created_utc: number;
    author: string;
    thumbnail?: string;
    num_comments: number;
    read?: boolean;
  };
}

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
        borderBottomColor="secondary.100"
        borderBottomWidth={1}
      >
        <Navigation />
      </Flex>
      <HStack
        h="full"
        w="full"
        maxW={1248}
        spacing={8}
        // marginY={12}
        marginX="auto"
        pt={10}
      >
        <Flex
          as="main"
          h="full"
          maxW="sm"
          w="full"
          bg="orange"
          flexDir="column"
        >
          <Heading as="h1" size="lg" mb={8}>
            Top
          </Heading>
          <PostsList />
        </Flex>
        <Flex as="aside" h="full" flex={1} w="full" bg="red" />
      </HStack>
    </VStack>
  );
};

export default Home;
