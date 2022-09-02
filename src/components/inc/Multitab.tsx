import { Box, Text, Flex } from "@components/base";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const Multitab = ({
  tabs,
  children,
}: {
  tabs: string[];
  children: ReactNode;
}) => {
  const [tabNo, setTabNo] = React.useState(0);
  const currentTab = React.Children.map<ReactNode, ReactNode>(
    children,
    (child, i) => {
      if (i === tabNo) {
        return child;
      }
    }
  );
  return (
    <Box>
      <Box css={{ btrr: 10, btlr: 10, overflow: "clip" }}>
        <Flex>
          {tabs.map((tab, i) => (
            <Box
              key={tab}
              css={{
                position: "relative",
                px: "$5",
                py: "$2",
                color: tabNo === i ? "white" : "black",
              }}
              onClick={() => setTabNo(i)}
            >
              {tabNo === i && (
                <Box
                  as={motion.div}
                  layoutId="tab-bg"
                  css={{ z: -10, position: "absolute", inset: 0, bg: "Black" }}
                />
              )}
              <Text css={{ z: 20, position: "relative" }}>{tab}</Text>
            </Box>
          ))}
        </Flex>
        <Box css={{ height: 4, bg: "Black" }} />
      </Box>
      {currentTab}
    </Box>
  );
};

export default Multitab;
