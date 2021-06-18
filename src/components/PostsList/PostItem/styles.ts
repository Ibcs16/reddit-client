import { Box, HStack, Text, Flex, Heading } from '@chakra-ui/react';

import styled from '@emotion/styled';

export const Container = styled(Flex)`
  transition: border 0.2s ease-in;
  cursor: pointer;
  border-color: transparent;
  &:hover {
    border-color: var(--chakra-colors-tertiary-300);
  }
`;
