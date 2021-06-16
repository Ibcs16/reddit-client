import '@emotion/react';
import { ThemeProviderProps } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      background: string;
      text: string;
    };
  }

  export interface StyledThemeProviderProps extends ThemeProviderProps {
    theme: Theme;
  }
}
