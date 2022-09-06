import React, { useRef } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Box, Text } from "../base";
import { Section } from ".";
import { fetcher, variants } from "@utils";
import { Quotes } from "../icons";

interface returns {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
}
const url = "https://api.quotable.io/random?maxLength=50?minLength=20 ";
const DDoM = () => {
  const { data, error } = useSWR(url, fetcher<returns>);
  if (!data && !error) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Failed to load</Text>;
  }
  return (
    <Section
      title={"Daily Dose of Motivation"}
      css={{ bg: "$backgroundSecondary" }}
      centered
    >
      <Box
        css={{
          position: "relative",
          maxWidth: 720,
          mx: "auto",
          minHeight: 200,
        }}
      >
        <motion.div
          variants={variants}
          initial="hidden-reverse"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          transition={{ delay: 0.4 }}
        >
          <Quotes style={{ position: "absolute", top: 0, opacity: 0.3 }} />
        </motion.div>
        <Text
          as="p"
          fontSize={{ "@initial": 7, "@md": 9 }}
          textAlign="center"
          css={{ my: "$4", fontFamily: "$greatVibes" }}
        >
          {data?.content.split("").map((letter, i) => {
            const text = letter === " " ? "&nbsp;" : letter;
            return (
              <Text
                css={{ fontFamily: "$greatVibes", display: "inline-block" }}
                fontSize={{ "@initial": 7, "@md": 9 }}
                as={motion.span}
                variants={variants}
                initial="hidden-reverse"
                custom={i}
                whileInView="visibleText"
                viewport={{ amount: 1, once: true }}
                key={i}
                dangerouslySetInnerHTML={{ __html: text }}
              ></Text>
            );
          })}
        </Text>

        <Text
          fontSize={{ "@initial": 3, "@md": 5 }}
          variants={variants}
          initial="hidden-reverse"
          whileInView="visible"
          viewport={{ amount: 1, once: true }}
          transition={{ delay: 0.7 }}
          as={motion.h3}
          textAlign="center"
        >
          {data?.author}
        </Text>
      </Box>
    </Section>
  );
};

export default DDoM;
