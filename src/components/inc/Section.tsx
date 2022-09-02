import React from "react";
import { CSS } from "@stitchesConfig";
import { Box, Container, Text, Flex } from "../base";
type sectionProps = {
  title: string;
  children: React.ReactNode;
  css?: CSS;
  id?: string;
  centered?: boolean;
};
const Section = ({
  title,
  children,
  css,
  id,
  centered = false,
}: sectionProps) => {
  return (
    <Box
      css={{ pt: "$4", "@md": { pt: "$6" }, ...css }}
      id={id ? id : undefined}
    >
      <Container>
        <Flex
          className="tHolder"
          align="center"
          gap={2}
          css={{ pt: "$4", "@md": { pt: "$5", mb: "$5" }, mb: "$3" }}
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
