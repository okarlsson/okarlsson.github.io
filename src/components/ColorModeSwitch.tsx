import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="outline"
      size="sm"
      aria-label="Toggle color mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
};
