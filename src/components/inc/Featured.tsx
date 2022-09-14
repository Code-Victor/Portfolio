import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLg, useMd } from "@hooks/useMediaQuery";
import config from "@config";
import { ChevronRight, Github, LinkIcon } from "../icons";
import { Flex, Grid, Box, Text, GradientBtn, Divider } from "../base";
import { Section } from ".";
import { variants } from "@utils";

const { featuredProjects } = config;
const Featured = ({ main = false }: { main?: boolean }) => {
  const [cardNo, setCardNo] = useState(main ? 6 : 3);
  const isMd = useMd();
  const isLg = useLg();
  const sectionRef = useRef<HTMLDivElement | null>(null);
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
        ref={sectionRef}
        columns={{ "@initial": "1", "@md": "2", "@lg": "3" }}
        css={{
          mt: "$3",
          "@md": {
            mt: "$5",
          },
          "&:": {
            display: "none",
            bg: "white",
          },
        }}
      >
        {featuredProjects.slice(0, cardNo).map((project, i) => {
          return <Card key={i} {...{ ...project, i, main, ref: sectionRef }} />;
        })}
      </Grid>
      {!main && (
        <Box
          variants={variants}
          initial="hidden-reverse"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          transition={{ delay: 0.7 }}
          as={motion.div}
        >
          <Link href="/projects" passHref>
            <Text as="a">
              <GradientBtn
                gradient={3}
                css={{
                  display: "block",
                  width: "fit-content",
                  mx: "auto",
                  mt: "$6",
                  "@md": {
                    mt: "$8",
                  },
                }}
              >
                {"See More Projects"}
              </GradientBtn>
            </Text>
          </Link>
        </Box>
      )}
    </Section>
  );
};

interface CardProps {
  title: string;
  cover: StaticImageData;
  github: string;
  showCase?: string;
  external: string;
  descriptionHtml: string;
  techs: string[];
}
interface animationProps {
  ref: React.MutableRefObject<HTMLDivElement | null | undefined>;
  main: boolean;
  i: number;
}
const Card = ({ ref, main, i, ...cardProps }: CardProps & animationProps) => {
  const { title, descriptionHtml, cover, showCase, techs, github, external } =
    cardProps;
  const animateProps = !main
    ? {
        as: motion.div,
        initial: "hiddenLg",
        whileInView: "visibleCustomNoD",
        custom: i + 0.5,
        viewport: { root: ref, amount: 0.8, once: true },
        variants,
      }
    : {
        as: motion.div,
        initial: "hiddenMd",
        whileInView: "visibleCustomNoD",
        custom: i + 0.5,
        viewport: { amount: 0.5, once: true },
        variants,
      };
  return (
    <Flex direction="column" gap="2" {...animateProps}>
      <Image
        src={cover || "/images/project.png"}
        alt={title}
        objectPosition={"center"}
        objectFit="cover"
        placeholder="blur"
      />
      <Flex direction={"column"} gap={{ "@initial": 2, "@md": 3 }}>
        <Text
          as="h1"
          fontSize={{
            "@initial": "5",
            "@md": "5mid",
          }}
        >
          {title}
        </Text>
        <Text
          as="p"
          dangerouslySetInnerHTML={{
            __html: descriptionHtml,
          }}
          fontSize="3"
        ></Text>
        <Flex gap="2">
          {techs.map((tech) => (
            <Text key={tech} css={{ color: "$link" }}>
              {tech}
            </Text>
          ))}
        </Flex>
        <Flex align={"center"} gap={{ "@initial": 2 }} css={{ mt: "$5" }}>
          {showCase ? (
            <Link href={`/projects/${showCase}`}>
              <GradientBtn
                br="lg"
                css={{
                  "& svg": { size: 20, transition: "all 400ms ease-in-out" },
                  "&:hover svg": { marginLeft: 5 },
                }}
              >
                View Project
                <ChevronRight />
              </GradientBtn>
            </Link>
          ) : (
            <>
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
                <Github style={{ width: 30, height: 30 }} />
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Featured;
