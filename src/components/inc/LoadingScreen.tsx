import React from "react";
import { Flex } from "../base";
import { motion } from "framer-motion";
import { Logo } from "@components/icons";

const ANIMATION_DURATION = 1.5;
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
        zIndex: "$6",
      }}
    >
      <motion.div
        initial={{ opacity: 0.3, filter: "blur(15px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: ANIMATION_DURATION }}
        layoutId="logo"
      >
        <Logo style={{ transform: "scale(1.8)" }} />
      </motion.div>
    </Flex>
  );
};

export default LoadingScreen;
