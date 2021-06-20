import { Flex, Image } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <img
      src="/reddit-icon-logo.png"
      style={{
        objectFit: 'contain',
        height: 20
      }}
      alt="Reddit logo"
    />
  );
};

export default Logo;
