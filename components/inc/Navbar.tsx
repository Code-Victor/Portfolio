import React, { useRef, useEffect, useState } from "react";
import { Box, Flex, Text, Container, NiceLink } from "../base";
import { Sun, Moon } from "../icons";
import { useTheme } from "next-themes";
import config from "../../config";

const { navLinks } = config;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [top, setTop] = useState(false);

  const topObserver = () => {
    setTop(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", topObserver);

    return () => {
      window.removeEventListener("scroll", topObserver);
    };
  });
  return (
    <Box
      as="nav"
      css={{
        bg: "transparent",
        color: "$textPrimary",
        backdropFilter: "blur(10px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        borderBottom: `1px solid ${top ? "$textLighter" : "transparent"}`,
        transition: "all 0.3s ease-in-out",
        zIndex: 20,
      }}
    >
      <Container>
        <Flex justify={"between"} align={"center"} css={{ height: "70px" }}>
          <Text
            as="h1"
            css={{ color: "$textPrimary", cursor: "pointer" }}
            fontFamily={"inter"}
            fontSize={6}
          >
            HV.
          </Text>
          <Flex gap={5} align="center">
            {navLinks.map(({ name, url, color }) => (
              <NiceLink
                key={name}
                href={url}
                css={
                  color
                    ? {
                        "&::after": { bg: color },
                      }
                    : {}
                }
              >
                {name}
              </NiceLink>
            ))}
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
