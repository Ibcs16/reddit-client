/* eslint-disable import/no-extraneous-dependencies */
import { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';

const AllTheProviders: FC = ({ children }) => {
  return (
    // <ThemeProvider theme="light">
    // </ThemeProvider>
    <>{children}</>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
