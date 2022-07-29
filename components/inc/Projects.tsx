import React from 'react'
import Section from './Section'
import { Flex,Text,GradientBtn, Grid } from '../base'
import { Github,LinkIcon } from '../icons'
const Projects = () => {
  return (
    <Section title="Other Noteworthy Projects" css={{bg:"$backgroundSecondary",'& h3:first-of-type':{ta:'center'}}}>
      <Grid
        columns={{ "@initial": 1, "@md": 2 }}
        css={{ mx:'auto',mt:'$5'}}
        justify="center"
      >
        <Card
          title="Vue Weather APP"
          description="My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling."
        />
        <Card
          title="Vue Weather APP"
          description="My first Vue app using OpenWeather API and fetch API with no custom libraries for requests or styling."
        />
      </Grid>
    </Section>
  );
}

const Card=({title,description}:{title:string,description:string})=>{
  const links = ["React", "Bootstrap"];
  return (
    <Flex direction={"column"} gap={{ "@initial": 3 }} >
      <Text as="h1" fontSize="5">
        {title}
      </Text>
      <Text as="p" fontSize="3">
        {description}
      </Text>
      <Flex gap="2">
        {links.map((link) => (
          <Text key={link} css={{ color: "$link" }}>
            {link}
          </Text>
        ))}
      </Flex>
      <Flex align={"center"} gap={{ "@initial": 2 }} css={{ mt: "$5" }}>
        <GradientBtn>
          <LinkIcon />
          Live demo
        </GradientBtn>
        <Github />
      </Flex>
    </Flex>
  );
}
export default Projects