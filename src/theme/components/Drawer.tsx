import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { drawerAnatomy as drawerParts } from "@chakra-ui/anatomy";

const drawerHelpers = createMultiStyleConfigHelpers(drawerParts.keys);

export const Drawer = drawerHelpers.defineMultiStyleConfig({
  baseStyle: {
    dialog: {
      bg: "gray.900",
    },
  },
});
