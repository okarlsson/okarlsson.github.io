import { baseTheme } from "@chakra-ui/react";

export const colors = {
  gradient: {
    start: "#d55b6d",
    end: "#8c3bdd",
  },
  brand: {
    50: "#f5e7ff",
    100: "#dabcf7",
    200: "#bf92ee",
    300: "#a666e5",
    400: "#8c3bdd",
    500: "#7322c4",
    600: "#591a99",
    700: "#40116e",
    800: "#260a44",
    900: "#0f021b",
  },
  gray: {
    ...baseTheme.colors.gray,
    950: "#101118",
  },
};
