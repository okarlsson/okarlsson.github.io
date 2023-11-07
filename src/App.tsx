import { ChakraBaseProvider, ColorModeScript } from "@chakra-ui/react";
import { Router } from "./router";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router />
    </ChakraBaseProvider>
  );
}

export default App;
