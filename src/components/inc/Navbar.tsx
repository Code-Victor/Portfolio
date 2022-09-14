import React, { useEffect, useState, useContext } from "react";
import { Box, Flex, Container, NiceLink, FloatingActionButton } from "../base";
import { Sun, Moon, Logo } from "../icons";
import { useTheme } from "next-themes";
import config from "@config";
import { motion } from "framer-motion";
import { LoaderContext } from "@context";
import { variants } from "@utils";

const { navLinks } = config;

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [top, setTop] = useState(false);
  const { loading } = useContext(LoaderContext);
  const [_, setRender] = useState(false);

  const topObserver = () => {
    setTop(window.scrollY > 0);
  };
  useEffect(() => {
    setRender(true);
  }, []);
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
          <motion.div
            key={`${loading}`}
            layoutId={loading ? "nav" : "logo"}
            transition={{ layout: { duration: 0.8 } }}
          >
            <Logo />
          </motion.div>

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
            {navLinks.map(({ name, url, color }, i) => (
              <NiceLink
                as={motion.a}
                variants={variants}
                initial="hidden"
                animate="visibleCustom"
                custom={i}
                key={name}
                href={url}
                target={url.includes("https") ? "_blank" : "_self"}
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
            <FloatingActionButton
              variants={variants}
              initial="hidden"
              animate="visibleCustom"
              custom={4.5}
              key={`${_}`}
              as={motion.button}
              aria-label={`${
                theme === "dark" ? "set theme to light" : "set theme to dark"
              }`}
              css={{
                overflow: "hidden",
                position: "relative",
                inset: 0,
                br: "$2",
                padding: 2,
                "&>*:first-child": {
                  size: 35,
                  br: "$2",
                  bg: "$tab",
                  color: "$textPrimary",
                },
              }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Box css={{ position: "relative" }}>
                <Box
                  css={{
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "50% 100px",
                    transform: `${
                      theme === "dark" ? "rotate(0deg)" : "rotate(90deg)"
                    }`,
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <Sun
                    style={{ width: "60%", height: "100%", color: "white" }}
                  />
                </Box>
                <Box
                  id={theme === "dark" ? "light" : "dark"}
                  css={{
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "50% 100px",
                    transform: `${
                      theme === "dark" ? "rotate(-90deg)" : "rotate(0deg)"
                    }`,
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <Moon
                    style={{ width: "60%", height: "100%", color: "black" }}
                  />
                </Box>
              </Box>
            </FloatingActionButton>
            {/* <motion.button
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
            </motion.button> */}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
