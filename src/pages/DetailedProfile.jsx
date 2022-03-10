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
import { getLeetCodeData,getCodeForcesData } from "../getData";

export default function Profile() {
  const [user_name, setUserName] = useState();
  const [user_name_codeChef, setUser_name_codeChef] = useState();
  const [leetcodeData, setLeetcodeData] = useState();
  const [codeforces, setCodeforces] = useState();
  

  const [platform, setPlatform] = useState();
  const { setData } = useAppContext();
  const { data } = useAppContext();
  

  const handleSearch = async (e) => {
    e.preventDefault();
    const leetcode_res=await fetchLeetCodeData();
    const codeforces_res=await fetchCodeForcesData();
    
    let combinedData={leetcode:leetcode_res, codeforces:codeforces_res};
    console.log(combinedData)
     setData(combinedData)

   
  };
  const fetchLeetCodeData=async()=>{
    try {
      const response = await getLeetCodeData(user_name);
      // setData(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
  const fetchCodeForcesData=async()=>{
    try {
      console.log("username",user_name_codeChef)
      const response = await getCodeForcesData(user_name_codeChef);
      // setData(response);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

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
              onChange={(e) => {
                setUser_name_codeChef(e.target.value);
              }}
              value={user_name_codeChef}
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
            onClick={handleSearch}
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
