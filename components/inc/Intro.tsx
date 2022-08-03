import React from "react";
import { Box, Container, Text, Flex } from "../base";
import Image from "next/image";
import config from "../../config";

const {coreValues}=config;
const Intro = () => {
  return (
    <Box css={{ pt: "$9", bg: "$backgroundSecondary" }}>
      <Container>
        <Text as="h1" fontSize="7" fontWeight="semibold" fontFamily="poppins" css={{ mb: "$3" }}>
          About me
        </Text>
        <Flex
          direction={{ "@initial": "column", "@md": "row" }}
          justify="around"
          gap="4"
        >
          <Box
            css={{
              p: "$2",
              bg: "gray",
              br: "$pill",
              flex: 1,
              maxWidth: 350,
              maxHeight: 350,
              minWidth: 300,
              alignSelf: "center",
              "@md": {
                p: "$3",
                alignSelf: "flex-start",
              },
            }}
          >
            <AvatarWrapper>
              <Image
                src="/images/Avatar.jpg"
                width={350}
                height={350}
                style={{}}
                layout="responsive"
                alt="my memoji"
              />
            </AvatarWrapper>
          </Box>
          <Box
            css={{
              spacey: "$3",
              "@md": {
                width: "50%",
              },
            }}
          >
            <Text
              as="h3"
              fontSize={"5"}
              fontFamily="poppins"
              fontWeight={"semibold"}
              css={{}}
            >
              Background
            </Text>
            <Text as="p" fontSize={"4"} css={{}}>
              I am Hamzat victor also know as Code Victor, a frontend developer
              based in Nigera I&apos;m in love building simple buy yet modern
              user interfaces without living out accessibilty.
            </Text>
            <Text as="p" fontSize={"4"} css={{}}>
              my interest for web development started a few months after
              graduating from high school, I was idle most of the times. Then my
              brother introduced me to programming in python ever since then
              I&apos;ve being sucked into the world of software development. My
              goal is to create equitable and performant web experience for all
              users that scales
            </Text>
            <Box>
              <Text
                as="h3"
                fontSize={"5"}
                fontFamily="poppins"
                fontWeight={"semibold"}
                css={{}}
              >
                My Core Values
              </Text>
              <Flex direction={"column"} gap="3">
                {coreValues.map((value, i) => {
                  return <ListItem key={i} {...value} />;
                })}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const ListItem = ({ name, color }: { name: string; color: string }) => {
  return (
    <Flex gap={4} align="center" css={{}}>
      <Box css={{ size: 20,br:'$round',bg:color }} />
      <Text as="p" fontSize={"4"} css={{}}>
        {name}
      </Text>
    </Flex>
  );
};
const AvatarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      css={{
        p: "$2",
        bg: "gainsboro",
        br: "$pill",
        flex: 1,
        '@md':{
          
          p: "$3",
        }
      }}
    >
      <Box
        css={{
          br: "$pill",
          overflow: "clip",
          filter: "grayscale(100%)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            filter: "grayscale(0%)",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Intro;
