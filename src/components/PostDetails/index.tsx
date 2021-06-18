import {
  Box,
  Center,
  Text,
  SkeletonText,
  Heading,
  Link,
  HStack
} from '@chakra-ui/react';
import { IPost } from '@components/PostsList/PostItem';
import Image from 'next/image';
import { useState } from 'react';
import RichText from '../RichText';
import extractRichText from '../../utils/extractRichText';
import getFormattedDateTime from '../../utils/getFormattedDateTime';
import getTimeFromNow from '../../utils/getTimeFromNow';

const EmptyState = () => {
  return (
    <Center w="full" h="full" flexDirection="column">
      <Image
        src="/reddit-body.png"
        layout="intrinsic"
        width={250}
        height={300}
      />
      <Text mt={8} fontSize="xl" fontWeight="bold" color="gray.500">
        Select a post to see it here
      </Text>
    </Center>
  );
};

interface PostDetailsProps {
  post: IPost;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  const [loading, setIsLoading] = useState(false);

  const dateTime = getFormattedDateTime(post?.created_utc);
  const timeFromNow = getTimeFromNow(post?.created_utc);

  if (!post.id) return <EmptyState />;

  return (
    <Box h="full" w="full" bg="white" rounded={8} boxShadow="xs" p={4}>
      {loading && (
        <>
          <SkeletonText skeletonHeight={8} mt="4" noOfLines={1} w="8em" />
          <SkeletonText skeletonHeight={4} mt="4" noOfLines={4} spacing="2" />
        </>
      )}
      <Box>
        <HStack w="full" spacing={2} mb={8}>
          <Link href={`/r/${post?.subreddit}/`} fontSize="xs" fontWeight="bold">
            r/{post?.subreddit}
          </Link>
          <Text
            marginY="auto"
            as="span"
            verticalAlign="middle"
            color="gray.400"
          >
            •
          </Text>
          <Text fontSize="xs" color="gray.400" flex={1}>
            Posted by {post?.author}{' '}
            <time dateTime={dateTime}>{timeFromNow}</time>
          </Text>
        </HStack>
        <Heading as="h2" fontSize="xl" mb={8}>
          {post?.title}
        </Heading>
        <RichText fontSize="md" id="description" text={post?.selftext_html} />
      </Box>
    </Box>
  );
};

export default PostDetails;
