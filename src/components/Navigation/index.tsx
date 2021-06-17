import { FC } from 'react';
import { Flex, HStack } from '@chakra-ui/react';

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
      <p>Hello</p>
      <p>OK</p>
    </HStack>
  );
};

export default Navigation;
