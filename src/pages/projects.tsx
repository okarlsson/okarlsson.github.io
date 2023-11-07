import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { projects } from "../data";

import { FiExternalLink } from "react-icons/fi";

export const ProjectsPage = () => {
  return (
    <Container maxW="4xl" my={12}>
      <Heading
        bgGradient="linear(to-l, gradient.start, gradient.end)"
        bgClip="text"
      >
        Projects
      </Heading>
      <Flex flexDirection="column" justifyContent="center" gap={8} mt={8}>
        {projects.map((item) => (
          <Card
            key={item.name}
            direction="column"
            overflow="hidden"
            transition="all .2s ease-in-out"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Image
              objectFit="cover"
              maxW="100%"
              maxH="470px"
              src={item.image}
              alt={item.name}
            />

            <Stack>
              <CardBody>
                <Heading>{item.name}</Heading>
                <Text py="2">{item.description}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  as={Link}
                  leftIcon={<FiExternalLink />}
                  href={item.link}
                  target="_blank"
                >
                  Visit
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Container>
  );
};
