import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { styles } from "./styles.ts";
import { fonts } from "./fonts.ts";
import { colors } from "./colors.ts";
import { components } from "./components/index.ts";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { styles, fonts, colors, components, config },
  withDefaultColorScheme({ colorScheme: "brand" })
);
