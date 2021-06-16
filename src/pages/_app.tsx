import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyles } from '../styles/Global';
import { defaultTheme } from '../styles/themes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
