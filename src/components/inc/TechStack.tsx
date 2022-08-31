import { Flex, Box, Text } from "@components/base";
import React, { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Vite } from "@components/icons";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGraphql,
  SiNodedotjs,
  SiNextdotjs,
  SiElectron,
  SiRedux,
  SiFigma,
  SiStorybook,
  SiAdobe,
  SiTypescript,
  SiVite,
} from "react-icons/si";
type stackName =
  | "React"
  | "Next.js"
  | "Redux"
  | "TypeScript"
  | "GraphQL"
  | "Electron"
  | "Figma"
  | "Storybook"
  | "Adobe"
  | "Sass"
  | "CSS3"
  | "HTML5"
  | "JavaScript"
  | "Node.js"
  | "Vite";
interface stack {
  name: stackName;
  icon: IconType;
  color?: string;
}
const stacks: stack[] = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#339933",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572B6",
  },
  {
    name: "Vite",
    icon: Vite,
  },
];
const TechStack = ({ stack }: { stack: stackName }) => {
  const [glow, setGlow] = useState<Record<"x" | "y", number>>({
    x: -100,
    y: -100,
  });
  const stackRef = React.useRef<HTMLDivElement>(null);
  function mouseMoveEvent(e: MouseEvent) {
    if (stackRef.current) {
      const { x, y } = stackRef.current.getBoundingClientRect();
      setGlow({ x: e.clientX - x, y: e.clientY - y });
      // stackRef.current.style.setProperty("--x", ().toString());
      // stackRef.current.style.setProperty("--y", ().toString());
      // console.log(e.clientX - y);
    }
  }

  useEffect(() => {
    const stackCurrent = stackRef.current;
    if (stackCurrent) {
      stackCurrent.addEventListener("mousemove", mouseMoveEvent);
    }
    return () => {
      if (stackCurrent) {
        stackCurrent.removeEventListener("mousemove", mouseMoveEvent);
        console.log("removed");
      }
    };
  }, [stackRef]);
  const {
    icon: Icon,
    name,
    color,
  } = stacks.filter((st) => st.name === stack)[0];
  return (
    <Flex
      direction="column"
      align={"center"}
      gap="2"
      ref={stackRef}
      css={{
        px: "$4",
        py: "$5",
        br: "$4",
        bg: "$tab",
        maxWidth: 220,
        minWidth: 180,
        overflow: "hidden",
        "& svg": { size: "4.5rem" },
        position: "relative",
        "&::after": {
          content: `''`,
          size: 240,
          zIndex: 2,
          br: "$round",
          position: "absolute",
          top: glow.y - 120,
          left: glow.x - 120,
          bg: "radial-gradient($textPrimary,transparent 80%)",
          filter: "blur(20px)",
          opacity: 0,
          transition: "opacity 0.4s",
        },
        "&:hover::after": {
          opacity: 0.5,
        },
        "&>*": {
          position: "relative",
          zIndex: 3,
        },
      }}
    >
      <Icon color={color ?? "currentColor"} />
      <Text as="p" fontSize={"5mid"} fontWeight={"medium"} css={{}}>
        {name}
      </Text>
    </Flex>
  );
};

const TechStacks = ({ stackNames }: { stackNames: stackName[] }) => {
  return (
    <Flex gap="4" css={{ mx: "auto", maxWidth: 1080 }}>
      {stackNames.map((name) => (
        <TechStack stack={name} key={name} />
      ))}
    </Flex>
  );
};

export default TechStacks;
