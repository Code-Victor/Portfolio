import React from "react";
import Section from "./Section";
import { Flex, Text, GradientBtn, Grid } from "../base";
import { Github, LinkIcon } from "../icons";
import config from "@config";

const { projects } = config;
const Projects = () => {
  return (
    <Section
      title="Other Noteworthy Projects"
      css={{
        bg: "$backgroundSecondary",
        "& h3:first-of-type": { ta: "center" },
      }}
      animation="all"
    >
      <Grid
        columns={{ "@initial": 1, "@md": 2 }}
        css={{ mx: "auto", mb: "$8" }}
        gap="5"
        justify="center"
      >
        {projects.map((project, i) => {
          return <Card key={i} {...project} />;
        })}
      </Grid>
    </Section>
  );
};

interface CardProps {
  title: string;
  github: string;
  external: string;
  descriptionHtml: string;
  techs: string[];
}
const Card = ({
  title,
  descriptionHtml,
  techs,
  external,
  github,
}: CardProps) => {
  return (
    <Flex direction={"column"} gap={{ "@initial": 3 }}>
      <Text as="h1" fontSize="5">
        {title}
      </Text>
      <Text as="p" fontSize="3">
        {descriptionHtml}
      </Text>
      <Flex gap="2">
        {techs.map((tech) => (
          <Text key={tech} css={{ color: "$link" }}>
            {tech}
          </Text>
        ))}
      </Flex>
      <Flex align={"center"} gap={{ "@initial": 2 }} css={{ mt: "$5" }}>
        <Text as="a" target="_blank" href={external}>
          <GradientBtn>
            <LinkIcon />
            Live demo
          </GradientBtn>
        </Text>
        <Text
          as="a"
          target="_blank"
          href={github}
          aria-label="github repository link"
        >
          <Github />
        </Text>
      </Flex>
    </Flex>
  );
};
export default Projects;
