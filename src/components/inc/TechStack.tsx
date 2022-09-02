import { Flex, Box, Text } from "@components/base";
import React, { useCallback, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { Firebase, Vite } from "@components/icons";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiFigma,
  SiStorybook,
  SiTypescript,
  SiTailwindcss,
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
  | "Vite"
  | "Firebase"
  | "Tailwind CSS";
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
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#61DAFB",
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
        px: "$2",
        py: "$3",
        br: "$4",
        bg: "$tab",
        maxWidth: 220,
        minWidth: 150,
        overflow: "hidden",
        scrollSnapAlign: "start",
        "@md": {
          minWidth: 180,
          px: "$4",
          py: "$5",
          br: "$4",
        },
        "& svg": {
          size: "3rem",
          "@md": {
            size: "4.5rem",
          },
        },
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
          transition: "opacity 0.4s ease-in-out",
          "@md": {},
        },
        "&:hover::after": {
          opacity: 0.4,
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
    <Flex
      gap={{ "@initial": "3", "@md": "4" }}
      css={{
        mx: "auto",
        maxWidth: 1080,
        overflow: "auto",
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": { width: 0, bg: "transparent" },
      }}
    >
      {stackNames.map((name) => (
        <TechStack stack={name} key={name} />
      ))}
    </Flex>
  );
};

export default TechStacks;
