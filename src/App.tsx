import { ThemeProvider } from "@emotion/react";

import { GlobalStyles } from "./styles/Global";
import { defaultTheme } from "./styles/themes";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      App working 🚀
    </ThemeProvider>
  );
};

export default App;
