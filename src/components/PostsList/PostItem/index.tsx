import { Box, HStack, Text, Flex } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import getTimeFromNow from '../../../utils/getTimeFromNow';

const PostItem: React.FC = () => {
  const { created_at, channel, nickName, commentsCount } = {
    nickName: 'u/userdev',
    channel: 'r/androiddev',
    created_at: new Date().getMilliseconds(),
    commentsCount: 4
  };

  return (
    <Flex
      w="full"
      borderWidth="1px"
      rounded="lg"
      boxShadow="xs"
      bg="white"
      flexDir="column"
      minHeight={180}
      marginBottom={4}
    >
      <HStack w="full" spacing={2}>
        <Text fontSize="xs" fontWeight="bold">
          {channel}
        </Text>
        <Text marginY="auto" as="span" verticalAlign="middle" color="gray.400">
          •
        </Text>
        <Text fontSize="xs" color="gray.400">
          Postado por {nickName} {getTimeFromNow(created_at)}
        </Text>
      </HStack>
      <Box flex={1} w="full" />
      <HStack w="full" p={2} borderTopColor="gray.100" borderTopWidth={1}>
        <Flex>
          <ChatIcon fontSize="sm" mr={2} />
          <Text fontSize="sm">{commentsCount} comments</Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default PostItem;
