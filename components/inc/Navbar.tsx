import React from "react";
import { Box,Flex, Text,Container, NiceLink } from "../base";
import { Sun,Moon } from "../icons";
import { useTheme } from "next-themes";


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Box
      css={{
        bg: "transparent",
        color: "$textPrimary",
        backdropFilter: "blur(10px)",
        position: "sticky",
        inset: 0,
        top: 0,
        zIndex: 20,
      }}
    >
      <Container>
        <Flex
          justify={"between"}
          align={"center"}
          css={{ height: "70px", }}
        >
          <Text
            as="h1"
            css={{ color: "$textPrimary" ,cursor:'pointer'}}
            fontFamily={"inter"}
            fontSize={6}
          >
            HV.
          </Text>
          <Flex gap={5} align="center">
            <NiceLink href="/#projects">Projects</NiceLink>
            <NiceLink href="#" css={{ "&::after": { bg: "$gradient3" } }}>
              Resume
            </NiceLink>
            <NiceLink href="/#articles"
            css={{ "&::after": { bg: "$gradient1" } }}
            >Articles</NiceLink>
            <button
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
