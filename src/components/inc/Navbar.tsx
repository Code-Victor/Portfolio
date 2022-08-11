import React, { useEffect, useState, useContext } from "react";
import { Box, Flex, Container, NiceLink } from "../base";
import { Sun, Moon, Logo } from "../icons";
import { useTheme } from "next-themes";
import config from "@config";
import { motion } from "framer-motion";
import { LoaderContext } from "@context";

const { navLinks } = config;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [top, setTop] = useState(false);
  const { loading } = useContext(LoaderContext);

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
          {
            <motion.div
              key={`${loading}`}
              layoutId={loading ? "nav" : "logo"}
              transition={{ layout: { duration: 0.6 } }}
            >
              <Logo />
            </motion.div>
          }
          <Flex
            gap={5}
            align="center"
            css={{
              display: "none",
              "@md": {
                display: "flex",
              },
            }}
          >
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
              aria-label={`${
                theme === "dark" ? "set theme to light" : "set theme to dark"
              }`}
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
