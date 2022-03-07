import React from "react";
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
} from '@chakra-ui/react'
import { Card } from '../components/Card'

export default function Profile() {
  return (
      <Card maxW='md' mx='auto' my={12}>
        <chakra.form >
          <Stack spacing='6' >
            <FormControl id='leetcode' borderColor="gray.400">
            <FormLabel>LeetCode</FormLabel>
              <Input
                name='leetcode'
                type='text'
                placeholder='Type LeetCode ID Here '                
              />
            </FormControl>
            <FormControl id='HackerRank' borderColor="gray.400" >
            <FormLabel>HackerRank</FormLabel>
              <Input
                name='HackerRank'
                type='text'
                placeholder='Type HackerRank ID Here '                
              />
            </FormControl>
            <FormControl id='CodeChef' borderColor="gray.400" >
            <FormLabel>CodeChef</FormLabel>
              <Input
                name='CodeChef'
                type='text'
                placeholder='Type CodeChef ID Here '                
              />
            </FormControl>
            <FormControl id='InterviewBit' borderColor="gray.400" >
            <FormLabel>InterviewBit</FormLabel>
              <Input
                name='InterviewBit'
                type='text'
                placeholder='Type InterviewBit ID Here '                
              />
            </FormControl>
            <Button
              type='submit'
              colorScheme='pink'
              size='lg'
              fontSize='md'
              
            >
              Submit
            </Button>
          </Stack>
        </chakra.form>
        </ Card>
  );
}
