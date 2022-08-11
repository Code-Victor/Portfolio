import { Container, Box, Hamburger, Flex } from "@components/base";
import useToggle from "@hooks/useToogle";
import React from "react";

interface Nav {
  navOpened: boolean;
  setNavOpened: (action: any) => any;
}
const FloatingBurger = ({
  navOpened: active,
  setNavOpened: setActive,
}: Nav) => {
  return (
    <Container
      css={{
        bg: "transparent",
        color: "$textPrimary",
        height: "70px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        transition: "all 0.3s ease-in-out",
        zIndex: "$5",
        "@md": {
          display: "none",
        },
      }}
    >
      <Flex
        align="center"
        justify={"end"}
        css={{ height: "100%", width: "100%" }}
      >
        <Hamburger
          active={active}
          onClick={setActive}
          aria-label={`${
            active ? "close mobile navigation" : "open mobile navigation"
          }`}
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </Hamburger>
      </Flex>
    </Container>
  );
};

export default FloatingBurger;
