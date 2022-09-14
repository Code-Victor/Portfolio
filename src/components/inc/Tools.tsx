import React from "react";
import { IconType } from "react-icons";
import { Section } from ".";
import { styled } from "@stitchesConfig";
import useToggle from "@hooks/useToogle";
import { Text, Grid, Flex, Divider } from "../base";
import config from "@config";
import { motion } from "framer-motion";

const { tools } = config;
const skills = Object.values(tools).slice(0, 12);
const Tools = () => {
  return (
    <Section
      title="Tools & Technologies"
      css={{
        bg: "$backgroundSecondary",
        pb: "$7",
        "& h3:first-of-type": {
          ta: "center",
        },
        "@md": {
          pb: "$9",
        },
      }}
      animation="all"
      centered
    >
      <Text
        as="p"
        fontSize={{ "@initial": 3, "@md": 4 }}
        css={{ mw: 640, mx: "auto", ta: "center" }}
      >
        One of my favourite things since I starting to learn to code has
        discovering all of the amazing tools and abstractions developers have
        created to make theirs and other developers&apos; lives easier. Here are
        some of the tools I use most frequently.
      </Text>
      <Grid
        gap="5"
        as={motion.ul}
        transition={{ staggerChildren: 0.4 }}
        columns={{
          "@initial": 2,
          "@md": 3,
          "@lg": 4,
        }}
        css={{
          mt: "$8",
        }}
      >
        {skills.map((skill) => {
          return (
            <Skill
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

const Skill = ({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: IconType;
  color: string;
}) => {
  const [hover, setHover] = useToggle(false);
  return (
    <Flex
      as={motion.li}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.7, once: true }}
      align={"center"}
      gap="2"
      css={{
        ta: "center",
        listStyle: "none",
        color: "$textPrimary",
        $$width: "2rem",
        "& svg": {
          size: "$$width",
        },
        "@lg": {
          $$width: "3rem",
        },
      }}
      direction="column"
      onMouseEnter={setHover}
      onMouseLeave={setHover}
    >
      <Icon
        style={{ transition: "all 300ms ease-in-out" }}
        color={hover ? color : "currentColor"}
      />
      <Text>{name}</Text>
    </Flex>
  );
};
export default Tools;
