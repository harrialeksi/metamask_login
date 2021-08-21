import { Provider } from "react-redux";
import store from "redux/store";
import theme from "definitions/chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { StyledThemeProvider } from "definitions/styled-components";
import GlobalStyle from 'styles/globalStyles';

import Home from "pages";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <StyledThemeProvider>
        <Provider store={store}>
          <div className="App">
            <GlobalStyle />
            <Home />
          </div>
        </Provider>
      </StyledThemeProvider>
    </ChakraProvider>
  );
}

export default App;
