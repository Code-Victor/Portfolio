import React from "react";
import { Sun, Moon } from "../icons";
import { Box, FloatingActionButton } from "@components/base";
import { useTheme } from "next-themes";
import { keyframes } from "@stitchesConfig";

const reveal = keyframes({
  "0%": { opacity: 0, transform: "translateY(20px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});
const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [_, setRender] = React.useState(false);

  React.useEffect(() => {
    setRender(true);
  }, []);
  return (
    <FloatingActionButton
      aria-label={`${
        theme === "dark" ? "set theme to light" : "set theme to dark"
      }`}
      css={{
        overflow: "hidden",
        animation: `${reveal} 1s ease-in-out forwards`,
        opacity: 0,
        animationDelay: "1s",
        "@md": {
          display: "none",
        },
      }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Box css={{ position: "relative" }} key={`s${_}`}>
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
          key={`m${_}`}
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
