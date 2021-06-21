import { Box, Button, HStack, Text, Link, Heading } from '@chakra-ui/react';
import { ChatIcon, CloseIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import getFormattedDateTime from '../../../utils/getFormattedDateTime';
import getTimeFromNow from '../../../utils/getTimeFromNow';
import { Container } from './styles';

export interface IPost {
  id: string;
  title: string;
  created_utc: number;
  author: string;
  thumbnail?: string;
  num_comments: number;
  read?: boolean;
  subreddit: string;
  permalink: string;
  url?: string;
  selftext?: string;
  selftext_html?: string;
}

interface PostItemProps {
  data: IPost;
  onClick(post: IPost): void;
  markAsReadPost(post: IPost): void;
  handleDismissPost(post: IPost): void;
}

const PostItem: React.FC<PostItemProps> = ({
  onClick,
  markAsReadPost,
  handleDismissPost,
  data
}) => {
  const {
    id,
    title,
    created_utc,
    author,
    thumbnail,
    num_comments,
    subreddit,
    read,
    permalink,
    url
  } = data;

  const dateTime = getFormattedDateTime(created_utc);
  const timeFromNow = getTimeFromNow(created_utc);

  const handleOnClick = () => {
    onClick(data);
    markAsReadPost(data);
  };

  return (
    <Container
      w="full"
      rounded="lg"
      boxShadow="xs"
      bg="white"
      flexDir="column"
      minHeight={180}
      marginBottom={4}
      borderWidth={1}
      overflow="hidden"
      data-testid={`post-${id}`}
      initial={{ opacity: 0, transform: 'scale(0.9)' }}
      animate={{ opacity: 1, transform: 'scale(1)' }}
      transition={{ duration: 0.4 }}
    >
      <HStack
        onClick={handleOnClick}
        w="full"
        spacing={2}
        p={3}
        data-testid="header"
      >
        <Link href={`/r/${subreddit}/`} fontSize="xs" fontWeight="bold">
          r/{subreddit}
        </Link>
        <Text marginY="auto" as="span" verticalAlign="middle" color="gray.400">
          •
        </Text>
        <Text fontSize="xs" color="gray.400" flex={1}>
          Posted by {author} <time dateTime={dateTime}>{timeFromNow}</time>
        </Text>
        {!data.read && (
          <Box pos="relative" w={3} h={3}>
            <Box rounded={6} boxSize={3} bg="secondary.100" />
          </Box>
        )}
      </HStack>
      <Box
        onClick={handleOnClick}
        flex={1}
        h="full"
        w="full"
        p={3}
        display="flex"
      >
        <Heading
          as="h3"
          fontSize="md"
          flex={1}
          id="title"
          noOfLines={[1, 2, 3]}
        >
          {title}
        </Heading>
        {thumbnail && (
          <Box
            h={95}
            w={112}
            pos="relative"
            borderWidth={1}
            borderColor="secondary.100"
            rounded="lg"
            overflow="hidden"
            as="a"
            href={url}
          >
            <Box
              bottom={0}
              right={0}
              zIndex={1}
              pos="absolute"
              bg="secondary.100"
              roundedTopLeft={3}
              px={0.5}
            >
              <ExternalLinkIcon color="white" />
            </Box>
            <Image src={thumbnail} layout="fill" />
          </Box>
        )}
      </Box>
      <HStack w="full" spacing={2} borderTopColor="gray.100" borderTopWidth={1}>
        <Button
          as="a"
          rounded="sm"
          leftIcon={<ChatIcon fontSize="1em" />}
          variant="ghost"
          fontSize="xs"
          color="gray.400"
          fontWeight="medium"
          href={permalink}
        >
          {num_comments} comments
        </Button>
        <Button
          rounded="sm"
          leftIcon={<CloseIcon fontSize="1em" />}
          variant="ghost"
          fontSize="xs"
          color="gray.400"
          fontWeight="medium"
          onClick={() => handleDismissPost(data)}
        >
          Dismiss post
        </Button>
      </HStack>
    </Container>
  );
};

export default PostItem;
