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
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from '../MotionBox';
import RichText from '../RichText';
import getFormattedDateTime from '../../utils/getFormattedDateTime';
import getTimeFromNow from '../../utils/getTimeFromNow';

const EmptyState = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, transform: 'scale(0.9)' }}
      animate={{
        opacity: 1,
        transform: 'scale(1)',
        transition: { delay: 0.2, duration: 0.4 }
      }}
      exit={{ opacity: 0 }}
      w="full"
      h="full"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <img
        src="/reddit-body.png"
        width={250}
        height={300}
        alt="Robot Blinking"
        style={{
          objectFit: 'contain'
        }}
      />
      <Text mt={8} fontSize="xl" fontWeight="bold" color="gray.500">
        Select a post to see it here
      </Text>
    </MotionBox>
  );
};

interface PostDetailsProps {
  post: IPost;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  const [loading, setIsLoading] = useState(false);

  const dateTime = getFormattedDateTime(post?.created_utc);
  const timeFromNow = getTimeFromNow(post?.created_utc);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [setIsLoading, post]);

  if (!post?.id) {
    return (
      <AnimatePresence>
        <EmptyState />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {post?.id && (
        <MotionBox
          initial={{ opacity: 0, transform: 'scale(0.9)' }}
          animate={{
            opacity: 1,
            transform: 'scale(1)',
            transition: { delay: 0.2, duration: 0.4 }
          }}
          exit={{ opacity: 0, transform: 'scale(0.8)' }}
          bg="white"
          rounded={8}
          boxShadow="xs"
          p={4}
          h="full"
          w="full"
        >
          {loading && (
            <>
              <SkeletonText skeletonHeight={8} mt="4" noOfLines={1} w="8em" />
              <SkeletonText
                skeletonHeight={4}
                mt="4"
                noOfLines={10}
                spacing="2"
              />
            </>
          )}
          {!loading && (
            <>
              <HStack w="full" spacing={2} mb={8}>
                <Link
                  href={`/r/${post?.subreddit}/`}
                  fontSize="xs"
                  fontWeight="bold"
                >
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
              <RichText
                fontSize="md"
                id="description"
                text={post?.selftext_html}
              />
            </>
          )}
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default PostDetails;
