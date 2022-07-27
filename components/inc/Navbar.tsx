import React from "react";
import { Box,Flex, Text,Container } from "../base";
import { Sun,Moon } from "../icons";
import { useTheme } from "next-themes";


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Box css={{ bg: "$backgroundPrimary", color: "$textPrimary" }}>
      <Container>
        <Flex
          justify={"between"}
          align={"center"}
          css={{ height: "70px", bg: "$backgroundPrimary" }}
        >
          <Text
            as="h1"
            css={{ color: "$textPrimary" }}
            fontFamily={"inter"}
            fontSize={6}
          >
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
            <button
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon/>}
            </button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
