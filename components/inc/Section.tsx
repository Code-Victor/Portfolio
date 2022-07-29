import React from "react";
import { CSS } from "../../stitches.config";
import { Box, Container, Text } from "../base";
type sectionProps = { title: string; children: React.ReactNode; css: CSS,id?:string }; 
const Section = ({ title, children, css ,id}: sectionProps) => {
  return (
    <Box css={{pt:'$6',...css}} id={id?id:undefined}>
      <Container>
        <Text as='h3'fontFamily={'poppins'}  fontWeight="medium" css={{mb:'$2','@md':{mb:'$4'}}} >{title}</Text>
      {children}
      </Container>
    </Box>
  );
};

export default Section;
