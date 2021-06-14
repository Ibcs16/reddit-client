import { ThemeProvider } from "@emotion/react";

import { GlobalStyles } from "./styles/Global";
import { defaultTheme } from "./styles/themes";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>App working 🚀</h1>
    </ThemeProvider>
  );
};

export default App;
