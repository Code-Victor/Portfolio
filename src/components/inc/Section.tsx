import React from "react";
import { motion } from "framer-motion";
import { CSS } from "@stitchesConfig";
import { Box, Container, Text, Flex } from "../base";
import { variants } from "@utils";

type sectionProps = {
  title: string;
  children: React.ReactNode;
  css?: CSS;
  id?: string;
  centered?: boolean;
  ref?: any;
  animation?: "header" | "all";
};
const Section = ({
  title,
  children,
  css,
  id,
  centered = false,
  animation = "header",
}: sectionProps) => {
  const header = animation === "header";
  const movement = {
    variants: variants,
    custom: 0,
    initial: "hidden-reverse",
    whileInView: "visible",
    viewport: { amount: header ? "all" : "some", once: true },
    transition: { delay: 0.7 },
    as: motion.div,
  };
  return (
    <Box
      as="section"
      css={{ pt: "$4", "@md": { pt: "$6" }, ...css }}
      id={id ? id : undefined}
    >
      <Container {...(animation === "all" && movement)}>
        <Flex
          className="tHolder"
          align="center"
          gap={2}
          css={{ pt: "$4", "@md": { pt: "$9", mb: "$6" }, mb: "$4" }}
          {...(animation === "header" && movement)}
        >
          {centered && (
            <Box
              className="liner"
              css={{ height: 2, flex: 1, background: "$textSecondary" }}
            />
          )}
          <Text
            as="h2"
            fontFamily={"poppins"}
            fontWeight="semibold"
            fontSize={{ "@initital": "5mid", "@md": 7 }}
          >
            {title}
          </Text>
          <Box
            className="liner"
            css={{ height: 2, flex: 1, background: "$textSecondary" }}
          />
        </Flex>
        {children}
      </Container>
    </Box>
  );
};
export default Section;
