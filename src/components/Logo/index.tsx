import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Flex h="full">
      <Box w={86} h="full" bg="gray.100" />
    </Flex>
  );
};

export default Logo;
