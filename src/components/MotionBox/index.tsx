import { Box, ChakraComponent } from '@chakra-ui/react';
import styled, { StyledComponent } from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';

export const StyledMotionBox = motion(styled(Box)`
  &.on-scrollbar::-webkit-scrollbar {
    width: 4px;
  }

  &.on-scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--chakra-colors-secondary-100);
    outline: 1px solid white;
    height: 30px;
  }
`);

export const MotionBox: FC<any> = ({ children, ...others }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      const element = document.querySelector('#postsMotionBox');
      if (element.classList.contains('on-scrollbar') === false) {
        element.classList.add('on-scrollbar');
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);
  return <StyledMotionBox {...others}>{children}</StyledMotionBox>;
};
