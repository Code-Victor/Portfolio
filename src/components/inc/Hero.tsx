import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Box, Flex, GradientBtn, Grid, Text, Container } from "../base";
import { Arrow, Github, LinkedIn, Mail, Twitter } from "../icons";
import { keyframes } from "@stitchesConfig";
import { variants } from "@utils";
import { useMd } from "@hooks/useMediaQuery";

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
  const [_, setRender] = useState(false);
  const animate = useCallback((i: number) => (isMd ? 5 : 2) + i, [isMd]);
  useEffect(() => {
    setRender(true);
  }, []);
  return (
    <Box
      css={{
        bg: "$backgroundPrimary",
        color: "$textPrimary",
        pt: 80,
        pb: 120,
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@md": {
          pt: 300,
          pb: 200,
        },
      }}
    >
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
              key={`h1-1-${_}`}
              textAlign={{ "@initial": "center", "@md": "left" }}
            >
              Hey, I&apos;m
            </Text>
            <Text
              as={motion.h1}
              fontSize={{ "@initial": 8, "@sm": 9, "@md": 10 }}
              fontFamily="poppins"
              key={`h1-2-${_}`}
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
              key={`p-1-${_}`}
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
            key={`img-1-${_}`}
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
                    animate="visibleCustom"
                    initial="hidden-reverse"
                    custom={animate(7 + i)}
                    key={`link-${i}-${_}`}
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
        as={motion.a}
        href="/#articles"
        variants={variants}
        initial="hidden-reverse"
        animate="visibleCustom"
        custom={animate(13)}
        css={{
          width: 50,
          height: 200,
          "& svg": {
            animation: `${Bounce} 2200ms infinite`,
            width: 20,
            height: 100,
            opacity: 0.8,
          },
          position: "absolute",
          right: "23%",
          bottom: "22%",
          display: "grid",
          placeItems: "center",
        }}
        aria-label={"go to main sections"}
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
