import Head from 'next/head';
import { VStack, HStack, Flex } from '@chakra-ui/react';
import getTimeFromNow from '../utils/getTimeFromNow';
import redditMockedData from '../assets/reddit_mock.json';
import Navigation from '../components/Navigation';

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
        pos="sticky"
        maxH={16}
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
        marginY={12}
        marginX="auto"
      >
        <Flex as="main" h="full" maxW="sm" w="full" bg="orange" />
        <Flex as="aside" h="full" flex={1} w="full" bg="red" />
      </HStack>
    </VStack>
  );
};

export default Home;
