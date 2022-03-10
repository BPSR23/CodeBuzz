import React from "react";
import { Link as ReachLink } from "@reach/router";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Center,
  Text,
  Box,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import Graph from "./PieChart";
import { Profile } from "../pages/DetailedProfile";
import { useAppContext } from "../AppContext";

const DashboardV1 = () => {
  const { data } = useAppContext();
  let leetcode_res = null;
  let codeforces_res = null;
  if (data) {
    leetcode_res = data.leetcode;
    codeforces_res = data.codeforces;
  }
  return (
    <Container maxW="container.xl" width="150vh" pt={10} pr={0} pl={0}>
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
          <Heading
            as="h1"
            color="white"
            py={10}
            pb={0}
            pl={-10}
            size="xl"
            w="full"
          >
            <Center color="black">Hello, Username 👋🏽</Center>
          </Heading>
          <SimpleGrid columns={2} spacing={2}>
            <Box borderRadius="5" bg="#0088FE" h={160} w="30vh">
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">
                  <Link href="/dashboardv1_1">LeetCode</Link>
                </Center>
                <Text pl={2} pb={2} color="white">
                  Submissions :
                  {leetcode_res &&
                    leetcode_res.total_problems_submitted}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Tough: {leetcode_res &&
                    leetcode_res.hard_problems_submitted}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Medium: {leetcode_res &&
                    leetcode_res.medium_problems_submitted}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Easy: {leetcode_res &&
                    leetcode_res.easy_problems_submitted}
                </Text>
              </Heading>
            </Box>
            <Box borderRadius="5" bg="#FFBB28" h={160} w="30vh">
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">
                  CodeForces
                </Center>
                <Text pl={2} pb={2} color="white">
                  Submissions :{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Tough:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Medium:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Easy:{" "}
                </Text>
              </Heading>
            </Box>
            <Box borderRadius="5" bg="#00C49F" h={160} w="30vh">
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">
                  CodeChef
                </Center>
                <Text pl={2} pb={2} color="white">
                  Submissions :{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Tough:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Medium:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Easy:{" "}
                </Text>
              </Heading>
            </Box>
            <Box borderRadius="5" bg="#FF8042" h={160} w="30vh">
              <Heading as="h3" color="white" py={3} size="sm" w="full">
                <Center pb={3} color="white">
                  InterviewBit
                </Center>
                <Text pl={2} pb={2} color="white">
                  Submissions :{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Tough:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Medium:{" "}
                </Text>
                <Text pl={2} pb={2} color="white">
                  Easy:{" "}
                </Text>
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
          <Container py={20} _hover={{ transform: "scale(1.2)" }}>
            <Graph />
          </Container>
        </VStack>
      </Flex>
    </Container>
  );
};
export default DashboardV1;
