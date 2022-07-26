import Image from "next/image";
import React from "react";
import { Box, Flex, GradientBtn, Grid, Text, Container } from "../base";
import { Arrow, Github, LinkedIn, Mail, Sun, Twitter } from "../icons";

interface LinkType {
  label: string;
  href: string;
  icon: React.ReactNode;
  variant: 1 | 2 | 3 | 4;
}
type variant = 1 | 2 | 3 | 4;
const Links = [
  {
    label: "Send an email",
    href: "mailto:oluwaborihamzat@gmail.com",
    icon: <Mail />,
    variant: 1,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwaborihamzat/",
    icon: <LinkedIn />,
    variant: 2,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/victorfiery",
    icon: <Twitter />,
    variant: 3,
  },
  {
    label: "Github",
    href: "https://www.github.com/code-victor",
    icon: <Github />,
    variant: 4,
  },
];

const Hero = () => {
  return (
    <Box css={{ bg: "$backgroundPrimary", pb: "$8", position: "relative" }}>
      <Container>
        <Grid columns={{ "@initial": 1, "@md": 5 }}>
          <Box
            css={{
              gcs: "span 1",
              mt: "0",
              display: "flex",
              fd: "column",
              gap: "$1",
              order: 2,
              px: "$2",
              "@md": {
                gcs: "span 3",
                px: "0",
                order: 1,
                mt: "$9",
                gap: "$3",
              },
            }}
          >
            <Text
              as="h1"
              fontSize={4}
              textAlign={{ "@initial": "center", "@md": "left" }}
            >
              Hey, I&apos;m
            </Text>
            <Text
              fontSize={{ "@initial": 7, "@md": 10 }}
              fontFamily="poppins"
              fontWeight={"medium"}
              css={{
                bg: "linear-gradient(89.65deg, #F4426C -1.66%, #EEC23D 48.97%, #DD5789 88.07%);",
                backgroundClip: "text",
                color: "transparent",
              }}
              textAlign={{ "@initial": "center", "@md": "left" }}
            >
              Hamzat Victor
            </Text>
            <Text
              as="p"
              fontSize={{ "@initial": 3, "@md": 4 }}
              textAlign={{ "@initial": "center", "@md": "left" }}
              css={{ mw: 550 }}
            >
              I&apos;m a software engineer based in Toronto, Canada and also a
              communication and journalism student. I enjoy creating things that
              live on the internet, whether that be websites, applications, or
              anything in between. I have been freelancing for a year now while
              studying at the university and I&apos;ve manage to gain a decent
              amount of experience and valuable knowledge from all different
              kinds of fields throughout my projects/work.
            </Text>
          </Box>
          <Box
            css={{
              as: "center",
              justifySelf: "center",
              order: 1,
              "@md": { gcs: "span 2" },
              "@lg": { grs: "span 2" },
            }}
          >
            <Image
              src={"/images/my memoji.png"}
              width={350}
              height={350}
              alt="my memoji"
            />
          </Box>
          <Flex
            css={{
              mt: "$7",
              order: 3,
              "@md": { gcs: "span 4" },
              "@lg": { gcs: "span 3" },
            }}
            wrap="wrap"
            justify={{ "@initial": "center", "@md": "start" }}
            gap="3"
          >
            {Links.map((link, i) => {
              return (
                <GradientBtn key={i} gradient={link.variant as variant}>
                  {link.icon}
                  <Text as="span" fontSize={3}>
                    {link.label}
                  </Text>
                </GradientBtn>
              );
            })}
          </Flex>
        </Grid>
      </Container>
      <Arrow style={{ position: "absolute", right: 40, bottom: 20 }} />
    </Box>
  );
};

export default Hero;
