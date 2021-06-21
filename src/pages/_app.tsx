import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { GlobalStyles } from '../styles/Global';
import { defaultTheme } from '../styles/themes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(MyApp);
