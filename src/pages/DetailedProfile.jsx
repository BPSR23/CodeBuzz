import { React, useState } from "react";
import DashboardV1_1 from "../components/DashboardV1_1";
import { Layout } from "../components/Layout";
import {
  Container,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useAppContext } from "../AppContext";
import { getData } from "../getData";

export default function Profile() {
  const [user_name, setUserName] = useState();
  // const { setData } = useAppContext();
  const { data } = useAppContext();

  const handleSearch = async (user_name) => {
    const response = await getData(user_name);
    console.log("logged here", response);
    // setData(response);
    console.log("HELLO");
  };

  return (
    <Card maxW="md" mx="auto" my={12}>
      <chakra.form>
        <Stack spacing="6">
          <FormControl id="leetcode" borderColor="gray.400">
            <FormLabel>LeetCode</FormLabel>
            <Input
              name="leetcode"
              type="text"
              placeholder="Type LeetCode ID Here "
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={user_name}
            />
          </FormControl>
          <FormControl id="HackerRank" borderColor="gray.400">
            <FormLabel>HackerRank</FormLabel>
            <Input
              name="HackerRank"
              type="text"
              placeholder="Type HackerRank ID Here "
            />
          </FormControl>
          <FormControl id="CodeChef" borderColor="gray.400">
            <FormLabel>CodeChef</FormLabel>
            <Input
              name="CodeChef"
              type="text"
              placeholder="Type CodeChef ID Here "
            />
          </FormControl>
          <FormControl id="InterviewBit" borderColor="gray.400">
            <FormLabel>InterviewBit</FormLabel>
            <Input
              name="InterviewBit"
              type="text"
              placeholder="Type InterviewBit ID Here "
            />
          </FormControl>
          <Button
            onClick={handleSearch(user_name)}
            type="submit"
            colorScheme="pink"
            size="lg"
            fontSize="md"
          >
            Submit
          </Button>
        </Stack>
      </chakra.form>
    </Card>
  );
}
