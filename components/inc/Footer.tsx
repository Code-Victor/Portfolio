import React from "react";
import { Box, Container, Flex, Grid, Text, Divider, NiceLink } from "../base";
import config from "../../config";
import Link from "next/link";

const { navLinks, socialMedia } = config;

const Footer = () => {
  const target = (link: string) => {
    return link.includes("http") ? "_blank" : "_self";
  };
  return (
    <Box css={{ bg: "$backgroundSecondary" }}>
      <Container>
        <Divider css={{ mb: "$4", "@md": { mb: "$6" } }} />
        <Grid columns={3} justify="center" css={{ maxWidth: 850, mx: "auto" }}>
          <Flex direction="column" gap={2}>
            {navLinks.map(({ name, url }) => (
              <Link href={url} key={name} passHref>
                <Text as="a" target={target(url)} css={{ ta: "center" }}>
                  {name}
                </Text>
              </Link>
            ))}
          </Flex>
          <Grid columns={2} css={{ gcs: "span 2" }}>
            {socialMedia.map(({ name, url }) => (
              <Link href={url} key={name} passHref>
                <Text as="a" target={target(url)} css={{ ta: "center" }}>
                  {name}
                </Text>
              </Link>
            ))}
          </Grid>
        </Grid>
        <Text
          textAlign={"center"}
          fontSize={3}
          css={{ color: "$textSecondary", display: "block", my: "$3" ,}}
        >
          Built with ♥ and{" "}
          <NiceLink href="https://nextjs.org/" target="_blank">
            Next.js
          </NiceLink>{" "}
          © 2022 Hamzat Victor.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
