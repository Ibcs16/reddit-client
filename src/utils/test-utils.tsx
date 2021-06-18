/* eslint-disable import/no-extraneous-dependencies */
import { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from '../styles/themes';

const AllTheProviders: FC = ({ children }) => {
  return <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
