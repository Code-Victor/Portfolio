import React from "react";
import { Box,Flex, Text,Container } from "../base";
import { Sun } from "../icons";


const Navbar = () => {
  return (
    <Box css={{bg: "$backgroundPrimary" }}>
      <Container>
        <Flex
          justify={"between"}
          align={"center"}
          css={{ height:'70px', bg: "$backgroundPrimary" }}
        >
          <Text as="h1" fontFamily={"inter"} fontSize={6}>
            HV.
          </Text>
          <Flex gap={5} align="center">
            <Text as="a" href="#">
              Projects
            </Text>
            <Text as="a" href="#">
              Resume
            </Text>
            <Text as="a" href="#">
              Contact
            </Text>
            <Sun />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
