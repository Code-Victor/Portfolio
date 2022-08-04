import React, { useEffect, useRef } from "react";
import { Box, Container, Flex, Text, Grid, NiceLink } from "../base";
import config from "../../config";
import { styled } from "../../stitches.config";
const { journey } = config;
import { useMd } from "../hooks/useMediaQuery";
import Section from "./Section";
const Journey = () => {
  const isMd = useMd();
  const journeyGridRef = useRef<HTMLDivElement>(null);
  const mobileJourneyGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aTags = journeyGridRef.current?.getElementsByTagName("a");
    const mobileATags = mobileJourneyGridRef.current?.getElementsByTagName("a");
    if (aTags) {
      Array.from(aTags).forEach((element) => {
        element.classList.add(NiceLink.toString().replace(".", ""));
      });}

    if (mobileATags) {
      Array.from(mobileATags).forEach((element) => {
        element.classList.add(NiceLink.toString().replace(".", ""));
      });

    }
  });
  return (
    <Section title={"My Journey"} css={{ "& .tHolder": { pb: "$2" } }}>
      <Text as="p" fontSize={{ "@initial": 4, "@md": 'mid' }} css={{ mb: "$4" }}>
        My journey into web development was propelled by my passion to solve
        problems and build products that could solve day-day human problems.This
        passion has constantly fueled me through this journey even in times of
        uncertainties and against all odds I have continued to thrive and learn.
      </Text>
      {isMd && (
        <Box ref={journeyGridRef} css={{}}>
          {journey.map((item, i) => {
            return <JourneyGrid key={i} i={i} {...item} />;
          })}
        </Box>
      )}
      {!isMd && (
        <Box ref={mobileJourneyGridRef} css={{}}>
          {journey.map((item, i) => {
            return <MobileJourneyGrid key={i} i={i} {...item} />;
          })}
        </Box>
      )}
    </Section>
  );
};

const JourneyGrid = ({
  title,
  paragraph,
  i,
}: {
  title: string;
  paragraph: string;
  i: number;
}) => {
  if (i % 2 === 0) {
    return (
      <Grid
        css={{
          gridTemplateColumns: "1fr 100px 1fr",
          [`&:last-of-type ${DottedLine}`]: {
            display: "none",
          },
        }}
        columns={"none"}
      >
        <Box css={{}}>
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
            css={{mb:'$4'}}
          ></Text>
        </Box>
        <Flex direction="column" align={"center"} css={{}}>
          <CountBtn count={i + 1} />
          <DottedLine />
        </Flex>
      </Grid>
    );
  }
  return (
    <Grid
      className="jG"
      columns={"none"}
      css={{
        gridTemplateColumns: "1fr 100px 1fr",
        [`&:last-of-type ${DottedLine.toString()}`]: {
          display: "none",
        },
      }}
    >
      <Box />
      <Flex direction="column" align={"center"} css={{}}>
        <CountBtn count={i + 1} />
        <DottedLine />
      </Flex>
      <Box css={{}}>
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
          css={{ mb: "$4" }}
        ></Text>
      </Box>
    </Grid>
  );
};
const MobileJourneyGrid = ({
  title,
  paragraph,
  i,
}: {
  title: string;
  paragraph: string;
  i: number;
}) => {
  return (
    <Grid
      columns={"none"}
      css={{
        gridTemplateColumns: "70px 1fr",
        [`&:last-of-type ${DottedLine}`]: {
          display: "none",
        },
      }}
    >
      <Flex direction="column" align={"center"} css={{}}>
        <CountBtn count={i + 1} />
        <DottedLine />
      </Flex>
      <Box css={{}}>
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
const CountBtn = ({ count }: { count: number }) => {
  return (
    <Box
      as="button"
      css={{
        border: "none",
        outline: "none",
        size: 50,
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

// () => (
//   <Box
//     css={{
//       border: "2px dashed $textSecondary",
//       width: 0,
//       transform: "translateX(50%)",
//       flex:1
//     }}
//   ></Box>
// );
export default Journey;
