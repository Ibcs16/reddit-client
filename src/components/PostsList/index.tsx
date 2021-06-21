import { List, ListItem, Center, Text } from '@chakra-ui/react';
import PostItem, { IPost } from './PostItem';

interface PostListProps {
  posts: IPost[];
  handleSelectPost(post: IPost): void;
}

export const EmptyPostList: React.FC = ({ ...others }) => {
  return (
    <Center display="flex" flexDirection="column" {...others} mb={4}>
      <img
        src="/reddit-error.png"
        style={{ width: 100, objectFit: 'contain', display: 'block' }}
        alt="Broken robot"
      />
      <Text fontSize="md" color="gray.400" mt={2}>
        No posts found
      </Text>
    </Center>
  );
};

const PostsList: React.FC<PostListProps> = ({
  posts,
  handleSelectPost,
  ...others
}) => {
  return (
    <List {...others}>
      {posts?.map((post) => (
        <ListItem w="full" maxW="lg" key={post.id}>
          <PostItem onClick={handleSelectPost} data={post} />
        </ListItem>
      ))}
    </List>
  );
};

export default PostsList;
