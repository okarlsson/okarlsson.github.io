import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoIosBusiness } from "react-icons/io";
import { experience } from "../data";

export const ExperiencePage = () => {
  return (
    <Container maxW="4xl" my={12}>
      <Heading
        bgGradient="linear(to-l, gradient.start, gradient.end)"
        bgClip="text"
      >
        Experience
      </Heading>
      <Flex flexDirection="column" justifyContent="center" gap={8} mt={8}>
        {experience.map((item) => (
          <Card
            key={`${item.company}-${item.role}`}
            transition="all .2s ease-in-out"
            _hover={{ transform: "scale(1.02)" }}
          >
            <CardHeader>
              <Flex alignItems="center" justifyContent="space-between" gap={4}>
                <Flex alignItems="center" gap={6}>
                  <Image
                    maxH="42px"
                    maxW="150px"
                    src={item.image}
                    alt={item.company}
                    fallback={
                      <Flex
                        bg="gray.600"
                        height={50}
                        w={50}
                        borderRadius="50%"
                        justifyContent="center"
                        alignItems="center"
                        p={4}
                      >
                        <Icon fontSize="4xl" as={IoIosBusiness} />
                      </Flex>
                    }
                  />
                </Flex>
                <Flex>
                  <Text fontWeight="semibold" fontSize="sm">
                    {item.start.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}{" "}
                    -{" "}
                    {item.end
                      ? item.end.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })
                      : "Current"}
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex flexDirection="column" gap={8}>
                <Flex flexDirection="column" gap={2}>
                  <Heading as="h2" fontSize="xl">
                    {item.company}
                  </Heading>
                  <Heading as="h3" fontSize="sm">
                    {item.role}
                  </Heading>
                </Flex>
                {item.description.split("\n\n").map((paragraph, index) => (
                  <Text key={index}>{paragraph}</Text>
                ))}
                <Flex flexDirection="column" gap={4}>
                  {item.tags.map((item) => (
                    <Flex
                      key={item.category}
                      gap={4}
                      direction={{ base: "column", sm: "row" }}
                    >
                      <Flex minW={125}>
                        <Text fontWeight="bold"> {item.category}</Text>
                      </Flex>
                      <Flex flexWrap="wrap" gap={2}>
                        {item.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Container>
  );
};
