import { css, Global } from "@emotion/react";

const globalStyles = ({ theme }: any) => css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul {
    margin-block-end: 0;
    margin-block-start: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;

    color: ${theme.colors.neutrals["0"]};
    background: ${theme.colors.neutrals["90"]};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button,
  table {
    font-size: 14px;
    line-height: 20px;
  }

  button {
    cursor: pointer;
  }

  a,
  a:active {
    color: ${theme.colors.primary};
    text-decoration: none;
  }
`;

export const GlobalStyles = () => (
  <Global styles={(theme) => globalStyles({ theme })} />
);
