import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";

const cardHelpers = createMultiStyleConfigHelpers(cardAnatomy.keys);

export const Card = cardHelpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      _dark: {
        bg: "gray.900",
        _hover: {
          bg: "gray.800",
        },
      },
    },
  },
});
