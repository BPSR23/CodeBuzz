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
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import Graph from "./PieChart";
import { Layout } from "../components/Layout";
import { Router, Switch, Route } from "react-router-dom";
import { DetailedProfile } from "../pages/DetailedProfile";
import CalNivo from "../Graphs/CalendarNivo";
import { useAppContext } from "../AppContext";
import { BarChart } from "../Graphs/BarChart";
const DashboardV1_1 = () => {
  const { data } = useAppContext();
  let leetcode_res = null;
  let codeforces_res = null;
  if (data) {
    leetcode_res = data.leetcode;
    codeforces_res = data.codeforces;
  }
  return (
    <Container
      maxW="container.xl"
      color="tomato"
      width="150vh"
      height="120vh"
      pt={5}
      pb={10}
      pr={0}
      pl={0}
    >
      <VStack
        borderRadius="20"
        w="full"
        h="full"
        bg="gray.200"
        pb={10}
        pl={10}
        spacing={10}
        originItems="flex-start"
      >
        <Heading as="h1" color="white" py={10} pb={0} size="xl" w="full">
          <Center color="black">Hello, Username 👋🏽</Center>
        </Heading>
        <Tabs size="lg" align="center" variant="enclosed">
          <TabList>
            <Tab>LeetCode</Tab>
            <Tab>CodeForces</Tab>
            <Tab>CodeChef</Tab>
            <Tab>InterviewBit</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Card 1 - LeetCode */}
              <Box
                borderRadius="5"
                bg="#0088FE"
                h={160}
                w="100vh"
                display={{ md: "flex" }}
                width={{ sm: "30vh", md: 40, lg: "100vh", xl: "100vh" }}
              >
                <Heading as="h3" color="white" py={3} size="sm" w="full">
                  <Center pb={3} color="white">
                    LeetCode
                  </Center>
                  <Text align="left" pl={5} pb={2} tetx="3xl" color="white">
                    Status: {leetcode_res && leetcode_res.status}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Ranking: {leetcode_res && leetcode_res.ranking}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Medium:{" "}
                    {leetcode_res && leetcode_res.medium_questions_solved}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Easy: {leetcode_res && leetcode_res.easy_questions_solved}
                  </Text>
                </Heading>
              </Box>
              {/* <Graph py={-20} /> */}
              <BarChart mt={10} />
            </TabPanel>
            <TabPanel>
              {/* Card 2 - CodeForces */}
              <Box borderRadius="5" bg="#FFBB28" h={160} w="100vh">
                <Heading as="h3" color="white" py={3} size="sm" w="full">
                  <Center pb={3} color="white">
                    CodeForces
                  </Center>
                  <Text align="left" pl={5} pb={2} color="white">
                    Submissions : {codeforces_res && codeforces_res.status}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Tough:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Medium:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Easy:{" "}
                  </Text>
                </Heading>
              </Box>
              <Graph py={-20} />
            </TabPanel>
            <TabPanel>
              {/* Card 3 - CodeChef */}
              <Box borderRadius="5" bg="#00C49F" h={160} w="100vh">
                <Heading as="h3" color="white" py={3} size="sm" w="full">
                  <Center pb={3} color="white">
                    CodeChef
                  </Center>
                  <Text align="left" pl={5} pb={2} color="white">
                    Submissions :{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Tough:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Medium:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Easy:{" "}
                  </Text>
                </Heading>
              </Box>
              <Graph py={-20} />
            </TabPanel>
            <TabPanel>
              <Box borderRadius="5" bg="#FF8042" h={160} w="100vh">
                <Heading as="h3" color="white" py={3} size="sm" w="full">
                  <Center pb={3} color="white">
                    InterviewBit
                  </Center>
                  <Text align="left" pl={5} pb={2} color="white">
                    Submissions :{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Tough:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Medium:{" "}
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Easy:{" "}
                  </Text>
                </Heading>
              </Box>
              <Graph py={-20} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
};

export default DashboardV1_1;
