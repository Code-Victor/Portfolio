import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@stitchesConfig";
import { Box, Flex, NiceLink, Text } from "@components/base";
import config from "@config";

const { navLinks, socialMedia } = config;

const NavContainer = styled("div", {
  height: "100vh",
  width: "60%",
  maxWidth:300,
  position: "fixed",
  display: "flex",
  fd: "column",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: "$4",
  bg: "$textPrimary",
  pt: "$8",
  px: "$4",
  pb: "$8",
  color: "$backgroundPrimary",
  '@sm':{
    pb:'$4'
  }
});
interface Nav {
  navOpened: boolean;
  setNavOpened: (action: any) => any;
}

const MobileNav = ({ navOpened: active, setNavOpened: setActive }: Nav) => {
  return (
    <AnimatePresence>
      {active && (
        <NavContainer
          as={motion.div}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "tween" }}
          exit={{ x: "100%", transition: { duration: 0.6, type: "tween" } }}
        >
          <Flex direction={"column"} gap={6} css={{ flex: 1 }}>
            {navLinks.map((link, i) => {
              return (
                <NiceLink
                  key={i}
                  href={link.url}
                  onClick={setActive}
                  css={{
                    color: "$backgroundPrimary",
                    width: "fit-content",
                    fontSize: "$5",
                    "&::after": {
                      bg: `${link.color}`,
                    },
                  }}
                >
                  {link.name}
                </NiceLink>
              );
            })}
          </Flex>
          <Flex justify={"between"}>
            {socialMedia.map(({ icon: Icon, url, name }, i) => {
              return (
                <Text
                  as="a"
                  css={{
                    bg: "transparent",
                    border: "none",
                    outline: "none",
                    color: "$backgroundPrimary",
                    opacity: "0.6",
                  }}
                  target="_blank"
                  href={url}
                  aria-label={name}
                  key={name}
                >
                  <Icon size={28} />
                </Text>
              );
            })}
          </Flex>
        </NavContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
