import { GlobalStyles } from '../styles/Global';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '../styles/themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
