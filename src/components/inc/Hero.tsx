import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Flex, GradientBtn, Grid, Text, Container } from "../base";
import { Arrow, Github, LinkedIn, Mail, Twitter } from "../icons";
import { keyframes } from "@stitchesConfig";
import { variants } from "@utils";
import { useMd } from "@hooks/useMediaQuery";

// interface LinkType {
//   label: string;
//   href: string;
//   icon: React.ReactNode;
//   variant: 1 | 2 | 3 | 4;
// }
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
  const isMd = useMd();
  const WAIT = isMd ? 5 : 2;
  console.log({ isMd, WAIT });
  const animate = useCallback((i: number) => (isMd ? 5 : 2) + i, [isMd]);
  return (
    <Box
      css={{
        bg: "$backgroundPrimary",
        color: "$textPrimary",
        pt: 80,
        pb: 120,
        position: "relative",
        minHeight:'100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@md": {
          pt: 300,
          pb: 200,
        },
        // "@lg": {
        //   pt: 350,
        //   pb: 250,
        // },
        // "@xl": {
        //   pt: 450,
        //   pb: 350,
        // },
      }}
    >
      <Container >
        <Grid columns={{ "@initial": 1, "@md": 5 }}>
          <Box
            css={{
              gcs: "span 1",
              mt: "0",
              display: "flex",
              fd: "column",
              gap: "$1",
              order: 2,
              "@md": {
                gcs: "span 3",
                order: 1,
                mt: "$9",
                gap: "$3",
              },
            }}
          >
            <Text
              as={motion.h1}
              variants={variants}
              initial="hidden-reverse"
              animate="visibleCustom"
              custom={animate(1)}
              fontSize={"mid"}
              key={`h1-1-${isMd}`}
              textAlign={{ "@initial": "center", "@md": "left" }}
            >
              Hey, I&apos;m
            </Text>
            <Text
              as={motion.h1}
              fontSize={{ "@initial": 8, "@sm": 9, "@md": 10 }}
              fontFamily="poppins"
              key={`h1-2-${isMd}`}
              variants={variants}
              initial="hidden-reverse"
              animate="visibleCustom"
              custom={animate(2)}
              fontWeight={"semibold"}
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
              as={motion.p}
              key={`p-1-${isMd}`}
              variants={variants}
              initial="hidden-reverse"
              animate="visibleCustom"
              custom={animate(5)}
              fontSize={4}
              textAlign={{ "@initial": "center", "@md": "left" }}
              css={{ mw: 550, lineHeight: "28px" }}
            >
              I&apos;m a self-taught frontend developer based in Nigeria and I
              make the world a better place by building quality,consistent and
              fully accessible user interfaces with react.
            </Text>
          </Box>
          <Box
            as={motion.div}
            variants={variants}
            initial="hidden-reverse"
            animate="visibleCustom"
            custom={animate(3)}
            key={`img-1-${isMd}`}
            css={{
              as: "center",
              justifySelf: "center",
              order: 1,
              "@md": { gcs: "span 2" },
              "@lg": { grs: "span 2" },
            }}
          >
            <Image
              src={"/images/my-memoji.png"}
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
                <Link href={link.href} key={i} passHref>
                  <motion.a
                    variants={variants}
                    key={`link-${i}-${isMd}`}
                    initial="hidden-reverse"
                    animate="visibleCustom"
                    custom={animate(7 + i)}
                    target="_blank"
                  >
                    <GradientBtn gradient={link.variant as variant}>
                      {link.icon}
                      <Text as="span" fontSize={3}>
                        {link.label}
                      </Text>
                    </GradientBtn>
                  </motion.a>
                </Link>
              );
            })}
          </Flex>
        </Grid>
      </Container>
      <Box
        as="a"
        href="/#experience"
        css={{
          width: 50,

          "& svg": {
            animation: `${Bounce} 2200ms infinite`,
          },
          position: "absolute",
          right: "15%",
          bottom: "15%",
          display: "grid",
          placeItems: "center",
        }}
        aria-label={"go to main section"}
      >
        <Arrow style={{}} />
      </Box>
    </Box>
  );
};

const Bounce = keyframes({
  "0%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-50px)" },
  "100%": { transform: "translateY(0)" },
});

export default Hero;
