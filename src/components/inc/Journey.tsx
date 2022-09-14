import React, { MutableRefObject, useRef } from "react";
import { Box, Flex, Text, Grid } from "../base";
import { NiceLinkCSS } from "@components/base/NiceLink";
import config from "@config";
import { styled } from "@stitchesConfig";
const { journey } = config;
import Section from "./Section";
import { motion } from "framer-motion";
import { variants } from "@utils";

const Journey = () => {
  return (
    <Section
      title={"My Journey"}
      css={{ bg: "$backgroundSecondary", "& .tHolder": { pb: "$2" } }}
      animation={"all"}
    >
      <Text
        as="p"
        fontSize={{ "@initial": 4, "@md": "mid" }}
        css={{ mb: "$8" }}
      >
        My journey into web development was propelled by my passion to solve
        problems and build products that could solve day-day human problems.This
        passion has constantly fueled me through this journey even in times of
        uncertainties and against all odds I have continued to thrive and learn.
      </Text>
      <Box
        css={{
          a: NiceLinkCSS,
        }}
      >
        {[
          ...journey.map((item, i) => (
            <MobileJourneyGrid
              key={i}
              i={i}
              length={journey.length}
              {...item}
            />
          )),
          ...journey.map((item, i) => (
            <JourneyGrid key={i} i={i} {...item} length={journey.length} />
          )), //FIXME: WHAT THE HECK IS LAST-OF-TYPE DO?
        ]}
      </Box>
    </Section>
  );
};

const JourneyGrid = ({
  title,
  paragraph,
  length,
  i,
}: {
  title: string;
  paragraph: string;
  i: number;
  length: number;
}) => {
  if (i % 2 === 0) {
    return (
      <Grid
        className="desktop-journey-grid"
        css={{
          gridTemplateColumns: "1fr 100px 1fr",
          display: "none",
          "@md": {
            display: "grid",
          },
        }}
        columns={"none"}
      >
        <Box
          as={motion.article}
          variants={variants}
          initial="-slideReveal-init"
          whileInView="-slideReveal-final"
        >
          <Text
            as="h3"
            fontSize={"5"}
            fontFamily="poppins"
            fontWeight={"semibold"}
            css={{}}
          >
            {title}
          </Text>
          <Text
            dangerouslySetInnerHTML={{
              __html: paragraph,
            }}
            as="p"
            fontSize={{ "@initial": 3, "@md": 4 }}
            css={{ mb: "$8" }}
          ></Text>
        </Box>
        <Flex direction="column" align={"center"} css={{}}>
          <CountBtn count={i + 1} />
          {length - 1 !== i && (
            <DottedLine
              as={motion.div}
              initial="flex-init"
              whileInView="flex-final"
              viewport={{ once: true, amount: "all" }}
              css={{}}
            />
          )}
        </Flex>
      </Grid>
    );
  }
  return (
    <Grid
      className="desktop-journey-grid"
      columns={"none"}
      css={{
        gridTemplateColumns: "1fr 100px 1fr",
        display: "none",
        "@md": {
          display: "grid",
        },
      }}
    >
      <Box />
      <Flex direction="column" align={"center"} css={{}}>
        <CountBtn count={i + 1} />
        {length - 1 !== i && (
          <DottedLine
            as={motion.div}
            variants={variants}
            initial="flex-init"
            whileInView="flex-final"
            viewport={{ once: true, amount: 1 }}
          />
        )}
      </Flex>
      <Box
        as={motion.article}
        variants={variants}
        initial="slideReveal-init"
        whileInView="slideReveal-final"
        viewport={{ once: true, amount: 1 }}
      >
        <Text
          as="h3"
          fontSize={"5"}
          fontFamily="poppins"
          fontWeight={"semibold"}
          css={{}}
        >
          {title}
        </Text>
        <Text
          dangerouslySetInnerHTML={{
            __html: paragraph,
          }}
          as="p"
          fontSize={{ "@initial": 3, "@md": 4 }}
          css={{ mb: "$8" }}
        ></Text>
      </Box>
    </Grid>
  );
};
const MobileJourneyGrid = ({
  title,
  paragraph,
  length,
  i,
}: {
  title: string;
  paragraph: string;
  i: number;
  length: number;
}) => {
  return (
    <Grid
      columns={"none"}
      className="mobile-journey-grid"
      css={{
        overflow: "hidden",
        gridTemplateColumns: "60px 1fr",
        "@md": {
          display: "none",
        },
      }}
    >
      <Flex direction="column" align={"center"} css={{}}>
        <CountBtn count={i + 1} size={45} />
        {length - 1 !== i && (
          <DottedLine
            as={motion.div}
            variants={variants}
            initial={["flex-init", "opacity-init"]}
            whileInView={["flex-final", "opacity-final"]}
            viewport={{ once: true, amount: 1 }}
          />
        )}
      </Flex>
      <Box
        as={motion.article}
        variants={variants}
        initial="slideReveal-init"
        whileInView="slideReveal-final"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Text
          as="h3"
          fontSize={"4"}
          fontFamily="poppins"
          fontWeight={"semibold"}
          css={{}}
        >
          {title}
        </Text>
        <Text
          dangerouslySetInnerHTML={{
            __html: paragraph,
          }}
          as="p"
          fontSize="3"
          css={{ mb: "$2" }}
        ></Text>
      </Box>
    </Grid>
  );
};
const CountBtn = ({
  count,
  size,
  root,
}: {
  count: number;
  size?: number;
  root?: MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <Box
      as={motion.button}
      variants={variants}
      initial="opacity-init"
      whileInView="opacity-final"
      viewport={{ once: true, root, amount: "all" }}
      css={{
        border: "none",
        outline: "none",
        color: "white",
        fontWeight: "$5",
        size: size || 50,
        br: "$round",
        bg: "$gradient1",
      }}
    >
      {count}
    </Box>
  );
};
const DottedLine = styled("div", {
  borderLeft: "2px dashed $textSecondary",
  width: 0,
  transform: "translateX(50%)",
  flex: 1,
});
export default Journey;
