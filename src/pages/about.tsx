import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { personalInformation } from "../data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const AboutPage = () => {
  const {
    firstName,
    lastName,
    about,
    profilePicture,
    linkedIn,
    github,
    email,
  } = personalInformation;

  return (
    <Container maxW="4xl" my={12}>
      <Flex flexDirection="column" justifyContent="center" gap={8}>
        <Heading
          bgGradient="linear(to-l, gradient.start, gradient.end)"
          bgClip="text"
        >
          About me
        </Heading>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          transition="all .2s ease-in-out"
          _hover={{ transform: "scale(1.02)" }}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={profilePicture}
            alt="Profile picture"
          />
          <Flex direction="column">
            <CardHeader>
              <Flex gap={4} justifyContent="space-between" alignItems="center">
                <Box>
                  <Heading>
                    {firstName} {lastName}
                  </Heading>
                </Box>
                <Flex gap={2}>
                  {linkedIn && (
                    <IconButton
                      as={Link}
                      icon={<FaLinkedin />}
                      aria-label="LinkedIn link"
                      href={linkedIn}
                      size="sm"
                    />
                  )}
                  {github && (
                    <IconButton
                      as={Link}
                      icon={<FaGithub />}
                      aria-label="GitHub link"
                      href={github}
                      size="sm"
                    />
                  )}
                  {email && (
                    <IconButton
                      as={Link}
                      icon={<MdEmail />}
                      aria-label="email link"
                      href={`mailto:${email}`}
                      size="sm"
                    />
                  )}
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex flexDirection="column" gap={4}>
                {about.split("\n\n").map((paragraph, index) => (
                  <Text key={index}>{paragraph}</Text>
                ))}
              </Flex>
            </CardBody>
            <CardFooter></CardFooter>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
};
