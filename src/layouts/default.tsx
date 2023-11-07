import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";

export const DefaultLayout = () => (
  <Flex minH="100vh" flexDirection="column">
    <Menu />
    <Flex p={{ base: 2, sm: 4}} flexDirection="column" flexGrow={1} mt={14}>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundBlendMode="saturation"
        bgGradient="radial-gradient(at top left, brand.400 30%, transparent 80%), radial-gradient(at bottom, rgb(42, 180, 217) 0%, transparent 60%),radial-gradient(at bottom left, rgb(0, 255, 255) 0%, transparent 50%)"
        zIndex={0}
        opacity={0.1}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          inset={0}
          bgGradient="linear-gradient(0deg, gray.950 60%, rgba(0, 0, 0, 0) 100%)"
          zIndex={1}
        />
      </Box>

      <Box zIndex={2} as="main">
        <Outlet />
      </Box>
    </Flex>
  </Flex>
);
