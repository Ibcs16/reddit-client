import {
  Avatar,
  AvatarBadge,
  HStack,
  Menu,
  MenuButton,
  Text,
  VStack,
  Button,
  MenuList,
  MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface ProfileButtonProps {
  nickName: string;
  karmaCount: number;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  nickName,
  karmaCount = 0
}) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        spacing={2}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
      >
        <HStack spacing={2}>
          <Avatar size="xs" borderRadius={4}>
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <VStack
            h="full"
            spacing={1}
            alignItems="flex-start"
            display={{ base: 'none', lg: 'flex' }}
          >
            <Text fontSize="xs" fontWeight="bold">
              {nickName}
            </Text>

            <Text fontSize="xs" fontWeight="bold" color="gray.400">
              {karmaCount} karmas
            </Text>
          </VStack>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Create Avatar</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileButton;
