import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      neutrals: {
        [key: string]: string;
      };
      primary: string;
    };
  }
}
