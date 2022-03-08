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

const DashboardV1_1 = () => {
  const { data } = useAppContext();
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
                    Status : <h1>{data && data.status}</h1>
                  </Text>
                  <Text align="left" pl={5} pb={2} color="white">
                    Ranking:{data && data.ranking}
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
              {/* Card 2 - CodeForces */}
              <Box borderRadius="5" bg="#FFBB28" h={160} w="100vh">
                <Heading as="h3" color="white" py={3} size="sm" w="full">
                  <Center pb={3} color="white">
                    CodeForces
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
