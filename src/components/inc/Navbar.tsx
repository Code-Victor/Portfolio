import React, { useRef, useEffect, useState, useContext } from "react";
import { Box, Flex, Text, Container, NiceLink } from "../base";
import { Sun, Moon, Logo } from "../icons";
import { useTheme } from "next-themes";
import config from "@config";
import { motion } from "framer-motion";
import { LoaderContext } from "@context";
import { styled, keyframes } from "@stitchesConfig";
import useToggle from "@hooks/useToogle";

const { navLinks } = config;

const collapse = keyframes({
  "0%": {
    transform: "translateY(-100%)",
  },
  "50%": {
    transform: "translateY(-100%) rotate(45deg)",
  },
});

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [top, setTop] = useState(false);
  const { loading } = useContext(LoaderContext);
  const [navOpen, setNavOpen] = useToggle(false);

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
          <Hamburger active={navOpen} onClick={setNavOpen}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Hamburger>
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
              aria-label="Toggle Theme"
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

const Hamburger = styled("button", {
  position: "relative",
  border: "none",
  opacity: 0.75,
  outline: "none",
  width: "45px",
  gap: 10,
  display: "flex",
  bg: "transparent",
  jc: "space-between",
  fd: "column",
  transition: "all 0.3s ease-in-out",
  "& > div": {
    height: 3,
    bg: "black",
    br: "$3",
    transition: "all 0.3s ease-in-out",
  },
  "& > div:nth-child(1)": {
    width: "50%",
    transformOrigin: "left center",
  },
  "& > div:nth-child(2)": {
    width: "100%",
    transformOrigin: "center",
  },
  "& > div:nth-child(3)": {
    transformOrigin: "right center",
    width: "50%",
    alignSelf: "flex-end",
  },
  "& > div:nth-child(4)": {
    position: "absolute",
    transformOrigin: "center",
    width: "100%",
    top: "50%",
    transform: "translateY(-50%)",
  },
  "@md": {
    display: "none",
  },
  variants: {
    active: {
      true: {
        gap: 0,
        "& > div:nth-child(1)": {
          transform: "translateY(100%)",
          opacity: 0,
          brr: 0,
        },
        "& > div:nth-child(2)": {
          transform: "rotate(-45deg)",
          transitionDelay: "0.3s",
        },
        "& > div:nth-child(3)": {
          transform: "translateY(-100%)",
          opacity: 0,
          blr: 0,
        },
        "& > div:nth-child(4)": {
          transform: "translateY(-50%) rotate(45deg)",
          transitionDelay: "0.3s",
        },
      },
    },
  },
});
export default Navbar;
