import { List, ListItem } from '@chakra-ui/react';
import PostItem, { IPost } from './PostItem';

interface PostListProps {
  posts: IPost[];
  handleSelectPost(post: IPost): void;
}

const PostsList: React.FC<PostListProps> = ({
  posts,
  handleSelectPost,
  ...others
}) => {
  return (
    <List {...others}>
      <ListItem w="full" maxW="lg">
        {posts?.map((post) => (
          <PostItem onClick={handleSelectPost} key={post.id} data={post} />
        ))}
      </ListItem>
    </List>
  );
};

export default PostsList;
