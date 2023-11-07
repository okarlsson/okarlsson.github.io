import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: StyleFunctionProps) => ({
    "html, body, #root": {
      minHeight: "100vh",
    },
    body: {
      bg: mode("white", "gray.950")(props),
    },
  }),
};
