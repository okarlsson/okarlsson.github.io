import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";
import { Link as BrowserLink } from "react-router-dom";
import { personalInformation } from "../data";

export const HomePage = () => {
  const { firstName, lastName, usps, mission, linkedIn, email } =
    personalInformation;
  return (
    <Container maxW="6xl">
      <Flex
        my={{ base: 12, sm: 36 }}
        flexDirection="column"
        justifyContent="center"
        gap={8}
      >
        <Flex flexDirection="column">
          <Heading as="h1" fontSize={{ base: "md", sm: 'lg'}}>
            Hi, my name is
          </Heading>
          <Heading as="h1" fontSize={{ base: "4xl", sm: '6xl'}}>
            {firstName} {lastName}
          </Heading>
          <Heading
            as="h2"
            minH={28}
            fontSize={{ base: "4xl", sm: '6xl'}}
            bgGradient="linear(to-l, gradient.start, gradient.end)"
            bgClip="text"
          >
            I'm{" "}
            <TypewriterComponent
              component="span"
              options={{
                strings: usps,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </Heading>
        </Flex>

        <Flex maxW="2xl">
          <Text fontSize="lg">{mission}</Text>
        </Flex>

        <Flex gap={2}>
          {linkedIn && (
            <Button
              as={Link}
              href={linkedIn}
              _hover={{ textDecoration: "none" }}
            >
              Connect with me
            </Button>
          )}
          {email && (
            <Button as={BrowserLink} variant="ghost" to="/about">
              Learn more
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
