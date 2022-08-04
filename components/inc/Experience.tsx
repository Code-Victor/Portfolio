import * as React from "react";
import { Box, Text, Flex, Grid,Divider } from "../base";
import { Section } from ".";
import config from "../../config";
import { motion,AnimatePresence } from "framer-motion";
import { styled } from "../../stitches.config";
import { useMd } from "../hooks/useMediaQuery";

const { experience } = config;
const companies = experience.map((exp) => exp.company);
const TabHeader = styled("div", {
  minWidth: "$9",
  ta: "center",
  color: "$textPrimary",
  py: "$2",
  px: "$3",
  position: "relative",
  "&:hover": {
    bg: "$tab",
    color: "textPrimary",
  },
  '@md':{
    ta: "left",
  }
});

const Experience = () => {
  return (
    <Section id="experience" title="Experience" css={{ bg: "$backgroundSecondary",overflow:'hidden' }}>
      <Tabs />
    </Section>
  );
};
const Underline = styled(motion.div, {
  position: "absolute",
  bottom: 0,
  height: 3,
  width: "100%",
  transform: "translateY(-100%)",
  zIndex: 2,
  bg: "$textPrimary",
  br: "$1",
  "@md": {
    left: 0,
    top: 0,
    height: "100%",
    width: 3,
  },
});
const Rule = styled("div", {
  height: 3,
  width: "100%",
  transform: "translateY(-100%)",
  bg: "$tab",
  "@md": {
    height: 150,
    width: 3,
    order: 1,
    transform: "translateX(100%)",
  },
});

interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(companies[0]);

  const tabInfo = experience.filter((exp) => exp.company === activeTab)[0];
  const isMd = useMd();
  console.log(isMd);
  return (
    <Grid
      columns={{ "@initial": "1", "@md": "none" }}
      gap={3}
      css={{ "@md": { gridTemplateColumns: "240px 1fr" } }}
    >
      <Flex direction={{ "@initial": "column", "@md": "row" }}>
        <Flex
          justify="center"
          direction={{ "@md": "column" }}
          css={{ "@md": { flex: 1, order: 2 } }}
        >
          {companies.map((company, index) => {
            return (
              <TabHeader key={index} onClick={() => setActiveTab(company)}>
                {company}
                {activeTab === company && (
                  <Underline
                    initial={{ x: isMd ? 0 : -15 }}
                    animate={{ x: isMd ? 0 : -15 }}
                    layoutId="tab-underline"
                  />
                )}
              </TabHeader>
            );
          })}
        </Flex>
        <Rule />
      </Flex>
      <AnimatePresence exitBeforeEnter>
        <Box as={motion.div} initial={{x:100,opacity:0}} exit={{x:100,opacity:0}}  animate={{x:0,opacity:1}} key={tabInfo.company}>
          <Flex justify="between" align="center">
            <Text as="h2" fontWeight="medium">
              {tabInfo.position}
            </Text>
            <Text as="p" fontSize={"1"} css={{color:'$textSecondary'}}>
              {tabInfo.duration}
            </Text>
          </Flex>
          <Text as="p" css={{ color: "$link", my: "$2" }} fontSize={2}>
            {tabInfo.company}
          </Text>
          <Flex direction="column" gap={{ "@initial": "2" }} as="ul">
            {tabInfo.role.map((detail, index) => {
              return (
                <Text
                  key={index}
                  as="li"
                  fontSize={{ "@initial": 3, "@md": 4 }}
                  css={{ listStyle: "none", color: "$textSecondary" }}
                >
                  - {detail}
                </Text>
              );
            })}
          </Flex>
        </Box>
      </AnimatePresence>
    </Grid>
  );
};
export default Experience;
