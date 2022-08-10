import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Section } from ".";
import config from "@config";
import { Flex, Grid, Box, Text, GradientBtn, Divider } from "../base";
import { useLg, useMd } from "@hooks/useMediaQuery";
import { Github, LinkIcon } from "../icons";
import Link from "next/link";

const { featuredProjects } = config;
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
      title={main ? "" : "Featured Projects"}
      css={{
        bg: "$backgroundSecondary",
        pb: "$7",
        "@md": {
         pb: "$9",
        },
        [`& .liner`]: {
          display: main ? "none" : "flex",
        },
      }}
      id="projects"
    >
      <Grid
        gapY={8}
        gapX={4}
        columns={{ "@initial": "1", "@md": "2", "@lg": "3" }}
        css={{
          mt:'$7',
          "&:": {
            display: "none",
            bg: "white",
          },
        }}
      >
        {featuredProjects.slice(0, cardNo).map((project, i) => {
          return <Card key={i} {...project} />;
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
    </Section>
  );
};

interface CardProps {
  title: string;
  cover: string;
  github: string;
  external: string;
  descriptionHtml: string;
  techs: string[];
}
const Card = ({
  title,
  descriptionHtml,
  cover,
  techs,
  github,
  external,
}: CardProps) => {
  return (
    <Flex direction="column" gap="2">
      <Image
        src={cover || "/images/project.png"}
        width={1900}
        height={1000}
        alt={title}
        objectPosition={"center"}
        objectFit="cover"
      />
      <Flex direction={"column"} gap={{ "@initial": 2,'@md':3 }}>
        <Text as="h1" fontSize={{
         "@initial" :"5",
         "@md" :"5mid",
         }}>
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
          <Text as="a" target="_blank" href={github}>
            <Github  style={{width:30,height:30}} />
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Featured;
