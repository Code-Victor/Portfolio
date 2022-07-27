import React from "react";
import { Box, Container,Text } from "../components/base";
import { Featured, Projects } from "../components/inc";

const projects = () => {
  return (
    <Box css={{bg:'$backgroundSecondary'}}>
      <Container css={{pt:'$4'}}>
        <Text as="h1" fontWeight={'bold'} fontFamily="poppins" fontSize={{'@initial':5,'@md':6,'@lg':8}}>Projects</Text>
        <Text as="p">Here are some projects that I&apos;ve recently worked on.</Text>
      </Container>
      <Featured main />
      <Projects />
    </Box>
  );
};

export default projects;
