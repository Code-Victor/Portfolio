import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Section } from ".";
import { Flex, Grid, Box, Text, GradientBtn, Divider } from "../base";
import { useLg, useMd } from "../hooks/useMediaQuery";
import { Github, LinkIcon } from "../icons";
import Link from "next/link";

const Featured = ({ main = false }: { main?: boolean }) => {
  const [cardNo, setCardNo] = useState(main ? 6 : 3);
  const isMd = useMd();
  const isLg = useLg();
  useEffect(() => {
    if (!main) {
      if (isLg) {
        setCardNo(3);
      } else if (isMd) {
        setCardNo(4);
      } else {
        setCardNo(3);
      }
    }
  }, [cardNo, isMd, isLg, main]);
  return (
    <Section
      title={main ? "" : "FEATURED PROJECTS"}
      css={{ bg: "$backgroundSecondary" }}
    >
      <Grid
        gapY={4}
        gapX={2}
        columns={{ "@initial": "1", "@md": "2", "@lg": "3" }}
        css={{
          "&:": {
            display: "none",
            bg: "white",
          },
          "@md": {
            "&:nth-child(4n)": {
              display: "none",
            },
          },
        }}
      >
        {Array.from({ length: cardNo }).map((_, i) => {
          return (
            <Card
              key={i}
              title="IntenseProxy"
              description="Proxy provider website including authentication, dashboard and dynamic features"
            />
          );
        })}
      </Grid>
      {!main && (
        <Link href="/projects" passHref>
          <GradientBtn
            gradient={3}
            css={{ display: "block", mx: "auto", mt: "$5" }}
          >
            {"See More"}
          </GradientBtn>
        </Link>
      )}
      {/* <Divider css={{ mt: "$7", "@md": { gridColumn: "span 2", mt: "$9" } }} /> */}
    </Section>
  );
};

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const Card = ({ title, description }: Partial<CardProps>) => {
  const links = ["React", "Bootstrap", "Styled Components"];
  return (
    <Flex direction="column" gap="2">
      <Box
        css={{
          position: "relative",
          minHeight: 180,
          "@md": {
            minHeight: 200,
          },
          "@lg": {
            minHeight: 240,
          },
        }}
      >
        <Image src="/images/project.png" layout="fill" alt="project image" />
      </Box>
      <Flex direction={"column"} gap={{ "@initial": 3 }}>
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
    </Flex>
  );
};
export default Featured;
