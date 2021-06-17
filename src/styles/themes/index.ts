import { Theme } from '@emotion/react';

import { extendTheme } from '@chakra-ui/react';

// export const defaultTheme: Theme = {
//   colors: {
//     background: '#DAE0E6',
//     text: '#333',
//     primary: 'orange'
//   }
// };
// 2. Call `extendTheme` and pass your custom values
export const defaultTheme = extendTheme({
  colors: {
    canvas: {
      100: '#DAE0E6'
    },
    secondary: { 100: '#edeff1' }
  },
  styles: {
    global: {
      body: {
        bg: 'canvas.100'
      }
    }
  }
});
