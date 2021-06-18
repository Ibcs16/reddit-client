import { List, ListItem } from '@chakra-ui/react';
import PostItem, { IPost } from './PostItem';

interface PostListProps {
  posts: IPost[];
}

const PostsList: React.FC<PostListProps> = ({ posts, ...others }) => {
  return (
    <List {...others}>
      <ListItem w="full" maxW="lg">
        {posts?.map((post) => (
          <PostItem key={post.id} data={post} />
        ))}
      </ListItem>
    </List>
  );
};

export default PostsList;
