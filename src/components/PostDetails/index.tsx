import { Box, Center, Text, SkeletonText, Heading } from '@chakra-ui/react';
import { IPost } from '@components/PostsList/PostItem';
import Image from 'next/image';
import { useState } from 'react';

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
  const [loading, setIsLoading] = useState(true);

  if (!post) return <EmptyState />;
  return (
    <Box h="full" w="full" bg="white" rounded={8} boxShadow="xs" p={4}>
      {loading && (
        <>
          <SkeletonText skeletonHeight={8} mt="4" noOfLines={1} w="8em" />
          <SkeletonText skeletonHeight={4} mt="4" noOfLines={4} spacing="2" />
        </>
      )}
    </Box>
  );
};

export default PostDetails;
