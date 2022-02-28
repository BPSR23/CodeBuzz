// import { Heading, List, ListItem, Grid, GridItem, Box } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../components/Dashboard";

export default function Homepage() {
  return (
    <Layout color>
      {/* <div color="tomato" w="100%" h="100%">
        <Grid h="100%" height="200px" templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem rowSpan={1} border="1px">
            <h1 >Hello, Username 👋🏽</h1>
          </GridItem>
          <GridItem rowSpan={1} border="1px" />
        </Grid>
      </div> */}
      {/* <Heading>Home page</Heading>
      <Text my={6}>{currentUser?.email}</Text>

      <Heading size='md' mt={8}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>reset page</Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>forgot page</Link>
        </ListItem>
        <ListItem>
          <Link to='/test'>test page</Link>
        </ListItem>
      </List> */}
      <Dashboard />
    </Layout>
  );
}
