import { css, Global, StyledThemeProviderProps } from '@emotion/react';

const globalStyles = ({ theme }: StyledThemeProviderProps) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 16px Roboto, sans-serif;

    color: ${theme.colors.text};
    background: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }
`;

export const GlobalStyles = () => (
  <Global styles={(theme) => globalStyles({ theme })} />
);
