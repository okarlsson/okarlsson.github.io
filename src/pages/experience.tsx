import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
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
            key={item.company}
            transition="all .2s ease-in-out"
            _hover={{ transform: "scale(1.02)" }}
          >
            <CardHeader>
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
                <Heading as="h2" fontSize="xl">
                  {item.company}
                </Heading>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex flexDirection="column" gap={8}>
                {item.positions.map((position, index) => (
                  <Flex key={position.role} flexDirection="column" gap={8}>
                    {index > 0 && <Divider />}
                    <Flex flexDirection="column" gap={2}>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        gap={4}
                      >
                        <Heading as="h3" fontSize="sm">
                          {position.role}
                        </Heading>
                        <Text fontWeight="semibold" fontSize="sm">
                          {position.start.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}{" "}
                          -{" "}
                          {position.end
                            ? position.end.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                              })
                            : "Current"}
                        </Text>
                      </Flex>
                    </Flex>
                    {position.description.split("\n\n").map((paragraph, i) => (
                      <Text key={i}>{paragraph}</Text>
                    ))}
                    {position.tags.length > 0 && (
                      <Flex flexDirection="column" gap={4}>
                        {position.tags.map((tagGroup) => (
                          <Flex
                            key={tagGroup.category}
                            gap={4}
                            direction={{ base: "column", sm: "row" }}
                          >
                            <Flex minW={125}>
                              <Text fontWeight="bold"> {tagGroup.category}</Text>
                            </Flex>
                            <Flex flexWrap="wrap" gap={2}>
                              {tagGroup.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                              ))}
                            </Flex>
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Container>
  );
};
