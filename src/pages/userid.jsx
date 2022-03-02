import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
  } from '@chakra-ui/react'
  import React, { useEffect, useRef, useState} from 'react'
  import { useHistory } from 'react-router-dom'
  import { Card } from '../components/Card'
  import { Layout } from '../components/Layout'
  import { collection, addDoc } from "firebase/firestore";
  import { firestore } from "../utils/init-firebase";

  export default function Registerpage() {
    const history = useHistory()
    const nameRef = useRef();
    const idRef = useRef();
    const [setError] = useState("");
    const [setLoading] = useState(false);
    const mounted = useRef(false)
  
    useEffect(() => {
      mounted.current = true
      return () => {
        mounted.current = false
      }
    }, [])
    // async function registeruser(){
    //   console.log("error")
    //   try {
    //     const docRef = await addDoc(collection(firestore, "UserData"), {
    //       name: "user",
    //      });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    // }

    async function registeruser(e) {
        e.preventDefault();
    
        try {
          setError("");
          setLoading(true);
          const data = await Registerpage(
          );
    
          if (data) {
            try {
              const docRef = await addDoc(collection(firestore, "UserData"), {
                name: nameRef.current.value,
                id: idRef.current.value,
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
    
            history.push("/");
          }
        } catch (error) {
          console.log(error);
          setError("Failed to add details");
        }
        setLoading(false);
      }

    return (
      <Layout>
        <Heading textAlign='center' my={12}>
          Add Details
        </Heading>
        <Card maxW='md' mx='auto' mt={4}>
          <chakra.form
            onSubmit={async e => {registeruser()}}
          >
            <Stack spacing='6'>
              <FormControl id='nameRef'>
                <FormLabel>Name</FormLabel>
                <Input
                  name='name'
                  type='name'
                  ref = {nameRef} required
                />
              </FormControl>
              <FormControl id='idRef'>
                <FormLabel>ID</FormLabel>
                <Input
                  name='id'
                  type='id'
                  ref = {idRef} required
                />
              </FormControl>
              <Button
                type='submit'
                colorScheme='pink'
                size='lg'
                fontSize='md'
                onClick={registeruser}
              >
                Add User Details
              </Button>
            </Stack>
          </chakra.form>
        </Card>
      </Layout>
    )
  }
  