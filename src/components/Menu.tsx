import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { personalInformation } from "../data";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { HamburgerIcon } from "@chakra-ui/icons";

const Logo = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => (
  <Heading as="h1" textTransform="uppercase" fontSize="2xl" fontWeight="light">
    {`${firstName.substring(0, 1)} ${lastName.substring(0, 1)}`}
  </Heading>
);

const Navigation = () => (
  <>
    <Button variant="ghost" as={RouterLink} to="/about">
      About Me
    </Button>
    <Button variant="ghost" as={RouterLink} to="/experience">
      Experience
    </Button>
    <Button variant="ghost" as={RouterLink} to="/projects">
      Projects
    </Button>
  </>
);

export const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { firstName, lastName } = personalInformation;

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={0}
      h={14}
      width="full"
      zIndex={3}
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        bottom: -2,
        backdropFilter: "blur(16px)",
        mask: "linear-gradient(to bottom, black 60px, transparent)",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottomWidth={1}
        py={2}
        px={4}
        zIndex={1}
        width="full"
      >
        <Flex>
          <RouterLink to="/">
            <Logo firstName={firstName} lastName={lastName} />
          </RouterLink>
        </Flex>
        <Show above="sm">
          <Flex alignItems="center" gap={2}>
            <Navigation />
            <ColorModeSwitch />
          </Flex>
        </Show>
        <Show below="sm">
          <IconButton
            size="sm"
            icon={<HamburgerIcon />}
            aria-label="Menu button"
            onClick={onOpen}
          />
        </Show>
        <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerHeader borderBottomWidth="1px">
              <Logo firstName={firstName} lastName={lastName} />
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={4}>
                <Navigation />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};
