import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  position: relative;
  height: 30px;
  z-index: 9999;
  width: 30px;
`;

export const Badge = styled.button`
  height: 30px;
  width: 30px;
  background: none;
  border: 0;
  cursor: pointer;
  position: relative;
`;

export const TranslationBox = styled(motion.div)`
  position: absolute;
  width: 260px;
  right: calc(100% - 30px);
  bottom: calc(100% + 10px);
  background: var(--chakra-colors-secondary-100);
  border-radius: 4px;
  padding: 20px;
  z-index: 99999;
  &::before {
    content: '';
    position: absolute;
    right: 10px;
    bottom: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--chakra-colors-secondary-100);
  }
`;

interface LanguageProps {
  selected: boolean;
}

export const Language = styled.div<LanguageProps>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 40px;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  color: var(--chakra-colors-white);
  ${(props) =>
    props.selected &&
    css`
      color: var(--chakra-colors-secondary-100);
    `}
  svg {
    cursor: pointer;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:nth-child(even) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button {
    background: transparent;
    border: none;
  }
`;
