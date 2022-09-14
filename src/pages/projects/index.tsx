import React from "react";
import { Box, Container, Text } from "../../components/base";
import { Featured, Projects } from "../../components/inc";

const projects = () => {
  return (
    <Box
      css={{
        bg: "$backgroundSecondary",
        pb: "$4",
        "& p": {
          lineHeight: "25px",
        },
      }}
    >
      <Container css={{ pt: "$9" }}>
        <Text
          as="h1"
          fontWeight={"bold"}
          fontFamily="poppins"
          css={{ mb: "$2", "@md": { mb: "$4" } }}
          fontSize={{ "@initial": 6, "@md": 7, "@lg": 8 }}
        >
          Projects
        </Text>
        <Text as="p">
          Here are some projects I&rsquo;ve recently worked on. They are a mix
          of personal exploration and coding challenges. It also shows my
          progression in skills, technologies, and approaches. I&rsquo;ve
          learned a lot from building these projects, and I hope to do more of
          them to own my skills and help real-world problems.{" "}
        </Text>
      </Container>
      <Featured main />
      <Projects />
    </Box>
  );
};

export default projects;
