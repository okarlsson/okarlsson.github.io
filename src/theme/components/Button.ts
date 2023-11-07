import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  defaultProps: {
    variant: "gradient",
  },
  variants: {
    gradient: {
      background: "none",
      _hover: {
        background: "none",
        backgroundSize: "200%",
        backgroundPosition: "60% center",
        bgGradient: "linear(to-r, gradient.start, gradient.end)",
      },
      backgroundSize: "200%",
      transition: "all .3s ease-in-out",
      border: "none",
      color: "white",
      bgGradient: "linear(to-r, gradient.start, gradient.end)",
    },
  },
});
