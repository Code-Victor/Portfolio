import React from "react";
import { Sun, Moon } from "../icons";
import { Box, FloatingActionButton } from "@components/base";
import { useTheme } from "next-themes";
import { styled } from "@stitchesConfig";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  console.log({ theme });
  return (
    <FloatingActionButton
      aria-label={`${
        theme === "dark" ? "set theme to light" : "set theme to dark"
      }`}
      css={{
        overflow: "hidden",
        "@md": {
          display: "none",
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
            transform: `${theme === "dark" ? "rotate(0deg)" : "rotate(90deg)"}`,
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Sun style={{ width: "60%", height: "100%" }} />
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
          <Moon style={{ width: "60%", height: "100%" }} />
        </Box>
      </Box>
    </FloatingActionButton>
  );
};

export default ThemeButton;
