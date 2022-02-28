import React from "react";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Center,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Graph from "./PieChart";

export const Dashboard = () => {
  return (
    <Container
      maxW="container.xl"
      color="tomato"
      width="100%"
      pt={10}
      pr={0}
      pl={0}
    >
      <Flex h="100vh" py={10}>
        <VStack
          borderLeftRadius="20"
          w="full"
          h="full"
          bg="gray.200"
          pb={10}
          pl={10}
          spacing={10}
          originItems="flex-start"
        >
          <Heading as="h1" color="white" py={10} pb={0} pl={-10} size="xl" w="full">
            <Center color="black">Hello, Username 👋🏽</Center>
          </Heading>
          <SimpleGrid columns={2} spacing={2}>
            <Box bg="black" borderRadius="5" bg="#0088FE" h={160} w="30vh">
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">LeetCode</Center>
                <Text pl={2} pb={2} color="white">Submissions : </Text>
                <Text pl={2} pb={2} color="white">Tough: </Text>
                <Text pl={2} pb={2} color="white">Medium: </Text>
                <Text pl={2} pb={2} color="white">Easy: </Text>
              </Heading>
            </Box>
            <Box bg="black" borderRadius="5" bg="#FFBB28" h={160} w={40}>
              <Heading as="h3" color="white"  py={3} size="sm" w="full">
                <Center pb={3} color="white">CodeForces</Center>
                <Text pl={2} pb={2} color="white">Submissions : </Text>
                <Text pl={2} pb={2} color="white">Tough: </Text>
                <Text pl={2} pb={2} color="white">Medium: </Text>
                <Text pl={2} pb={2} color="white">Easy: </Text>
              </Heading>
            </Box>
            <Box bg="black" borderRadius="5" bg="#00C49F" h={160} w={40}>
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">CodeChef</Center>
                <Text pl={2} pb={2} color="white">Submissions : </Text>
                <Text pl={2} pb={2} color="white">Tough: </Text>
                <Text pl={2} pb={2} color="white">Medium: </Text>
                <Text pl={2} pb={2} color="white">Easy: </Text>
              </Heading>
            </Box>
            <Box bg="black" borderRadius="5" bg="#FF8042" h={160} w={40}>
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">InterviewBit</Center>
                <Text pl={2} pb={2} color="white">Submissions : </Text>
                <Text pl={2} pb={2} color="white">Tough: </Text>
                <Text pl={2} pb={2} color="white">Medium: </Text>
                <Text pl={2} pb={2} color="white">Easy: </Text>
              </Heading>
            </Box>
          </SimpleGrid>
        </VStack>
        <VStack
          w="full"
          borderRightRadius="20"
          h="full"
          bg="gray.200"
          p={10}
          spacing={0}
          originItems="flex-start"
        >
          <Graph />
        </VStack>
      </Flex>
    </Container>
  );
};
