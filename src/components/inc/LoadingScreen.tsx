import Image from "next/image";
import React from "react";
import { Box, Text, Flex } from "../base";
import { motion } from "framer-motion";
import { keyframes } from "@stitchesConfig";
import TypeText from "./TypeText";
import { Logo } from "@components/icons";
const wiggle = keyframes({});
const LoadingScreen = () => {
  return (
    <Flex
      as={motion.div}
      direction={"column"}
      justify={"center"}
      align={"center"}
      css={{
        inset: 0,
        position: "fixed",
        bg: "$backgroundPrimary",
        zIndex: 40,
      }}
    >
      <motion.div
        initial={{ opacity: 0.2, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
        layoutId="logo"
      >
        <Logo style={{ transform: "scale(1.8)" }} />
      </motion.div>
    </Flex>
  );
};

export default LoadingScreen;
