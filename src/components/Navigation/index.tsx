import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import Logo from '../Logo';
import ProfileButton from '../ProfileButton';

const Navigation: FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      as="nav"
      h="full"
      w="full"
      maxW={1248}
      marginX="auto"
      px={4}
      alignItems="center"
    >
      <Logo />
      <ProfileButton nickName="Ibcs16" karmaCount={2} />
    </Flex>
  );
};

export default Navigation;
