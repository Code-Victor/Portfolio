import { Flex, Box, Text } from "@components/base";
import React from "react";
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
      css={{
        px: "$4",
        py: "$5",
        br: "$4",
        bg: "$tab",
        maxWidth: 220,
        minWidth: 180,
        "& svg": { size: "4.5rem" },
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
