import React from "react";
import { styled, css } from "@stitchesConfig";
import { Box, Container, Flex, GradientBtn, Text } from "../base";
import { motion } from "framer-motion";

const srOnly = css({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
const NewsLetter = () => {
  return (
    <Box css={{ py: "$9", bg: "$backgroundSecondary" }}>
      <Container>
        <Flex
          direction="column"
          gap={4}
          css={{
            p: "$5",
            border: "1px solid $textSecondary",
            br: "$2",
            maxWidth: 640,
            mx: "auto",
          }}
          as={motion.div}
          initial={{ opacity: 0, blur: 20, y: 40 }}
          whileInView={{ opacity: 1, blur: 0, y: 0 }}
          viewport={{ amount: 1 ,once:true}}
        >
          <Text
            as="h1"
            fontWeight={"medium"}
            fontSize={{ "@initial": 4, "@md": 5, "@lg": 6 }}
          >
            Subscribe to my newletter
          </Text>
          <Text as="p" fontSize={{ "@initial": 2, "@md": 3, "@lg": 4 }}>
            Get emails from me about web development, design, accessibility and
            early access to content.
          </Text>
          <Flex
            gap={{ "@initial": "2", "@md": "0" }}
            align={{ "@initial": "center", "@md": "stretch" }}
            direction={{ "@initial": "column", "@md": "row" }}
          >
            <InputWrapper>
              <Text
                as="label"
                htmlFor="news-letter"
                className={srOnly.toString()}
              >
                Subscribe to my newsletter
              </Text>
              <Input id="news-letter" />
            </InputWrapper>
            <GradientBtn
              gradient={2}
              css={{
                borderRadius: "$3",
                fontWeight: "$5",
                "&>div": { color: "white!important", bg: "transparent" },
                "@md": { btlr: 0, bblr: 0 },
              }}
            >
              Subscribe
            </GradientBtn>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
const InputWrapper = styled("div", {
  bg: "linear-gradient(-51.06deg, #9358F7 0.87%, #9259F7 7.31%, #8E5DF6 13.75%, #8862F5 20.19%, #806BF4 26.63%, #7575F2 33.07%, #6882F0 39.51%, #5990EE 45.95%, #4A9FEB 52.39%, #3BADE9 58.84%, #2EBAE7 65.28%, #23C4E5 71.72%, #1BCDE4 78.16%, #15D2E3 84.6%, #11D6E2 91.04%, #10D7E2 97.48%)",

  width: "100%",
  height: 40,
  br: 4,
  p: 1,
  backgroundPosition: "left 100%",

  "@md": {
    p: 1.5,
    flex: 1,
    btrr: 0,
    bbrr: 0,
    height: "auto",
  },
});
const Input = styled("input", {
  border: "none",
  outline: "none",
  size: "100%",
  pl: "$2",
  btrr: 0,
  bbrr: 0,
});
export default NewsLetter;
