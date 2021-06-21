import { Flex } from '@chakra-ui/react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion(Flex))`
  transition: border 0.2s ease-in;
  cursor: pointer;
  border-color: transparent;
  &:hover {
    border-color: var(--chakra-colors-tertiary-300);
  }
`;
