import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import AppContextProvider from "./AppContext";
import * as serviceWorker from "./serviceWorker";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
});

ReactDOM.render(
  <AppContextProvider>
    <React.StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </AppContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
