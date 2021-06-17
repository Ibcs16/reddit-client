import { FC } from 'react';
import { HStack } from '@chakra-ui/react';
import Logo from '../Logo';
import ProfileButton from '../ProfileButton';

const Navigation: FC = () => {
  return (
    <HStack
      justifyContent="space-between"
      as="nav"
      h="full"
      w="full"
      maxW={1248}
      marginX="auto"
    >
      <Logo />
      <ProfileButton nickName="Ibcs16" karmaCount={2} />
    </HStack>
  );
};

export default Navigation;
