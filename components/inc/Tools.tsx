import React, { useState } from "react";
import { IconType } from "react-icons";
import { Section } from ".";
import { styled } from "../../stitches.config";
import useToggle from "../hooks/useToogle";
import { Text, Grid, Flex,Divider } from "../base";
import config from "../../config";

const { tools } = config;
const skills = Object.values(tools).slice(0, 12);
const Tools = () => {
  return (
    <Section
      title="Tools & Technologies"
      css={{
        bg: "$backgroundSecondary",
        "& h3:first-of-type": {
          ta: "center",
        },
      }}
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
        as="ul"
        gap="5"
        columns={{
          "@initial": 2,
          "@md": 3,
          "@lg": 4,
        }}
        css={{
          mt: "$5",
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
      <Divider css={{ mt: "$7", "@md": { gridColumn: "span 2", mt: "$9" } }} />
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
  const [hover, setHover] = useState(false);
  return (
    <Flex
      align={"center"}
      gap='2'
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
      as="li"
      direction="column"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Icon color={hover ? color : "currentColor"} />
      <Text>{name}</Text>
    </Flex>
  );
};
export default Tools;
