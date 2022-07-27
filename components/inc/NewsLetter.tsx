import React from 'react'
import { styled } from '../../stitches.config';
import { Box, Container,Flex, GradientBtn, Text } from '../base'

const NewsLetter = () => {
  return (
    <Box css={{ pt: "$9", bg: "$backgroundSecondary" }}>
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
        >
          <Text as="h1" fontWeight={'medium'} fontSize={{ "@initial": 4, "@md": 5, "@lg": 6}}>
            Subscribe to my newletter
          </Text>
          <Text as="p" fontSize={{ "@initial": 2, "@md": 3, "@lg": 4 }}>
            Get emails from me about web development, design, accessibility and
            early access to content.
          </Text>
          <Flex>
            <InputWrapper>
              <Input />
            </InputWrapper>
            <GradientBtn
              gradient={2}
              css={{ btlr: 0, bblr: 0, "&>div": { bg: "transparent" } }}
            >
              Subscribe
            </GradientBtn>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
const InputWrapper = styled("div", {
  flex: 1,
  p:1.5,
  bg: "linear-gradient(-51.06deg, #9358F7 0.87%, #9259F7 7.31%, #8E5DF6 13.75%, #8862F5 20.19%, #806BF4 26.63%, #7575F2 33.07%, #6882F0 39.51%, #5990EE 45.95%, #4A9FEB 52.39%, #3BADE9 58.84%, #2EBAE7 65.28%, #23C4E5 71.72%, #1BCDE4 78.16%, #15D2E3 84.6%, #11D6E2 91.04%, #10D7E2 97.48%)",
  backgroundPosition:'left 100%'
});
const Input= styled('input',{
  border:"none",
  outline:"none",
  size:"100%",
  pl:'$2'
})
export default NewsLetter