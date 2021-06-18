import { List, ListItem } from '@chakra-ui/react';
import PostItem from './PostItem';

const PostsList: React.FC = ({ ...others }) => {
  return (
    <List {...others}>
      <ListItem w="full" maxW="md">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ListItem>
    </List>
  );
};

export default PostsList;
