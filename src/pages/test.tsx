import { Box, Container } from "@components/base";
import { ImageSlider, Multitab, TechStacks } from "@components/inc";

import React, { useEffect, useCallback } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Images = [
  {
    src: "/images/projects/keyboadr-thumbnail-slim.png",
    caption: "keyboadr",
  },
  {
    src: "/images/projects/keyboadr-thumbnail-slim.png",
    caption: "keyboadr",
  },
  {
    src: "/images/projects/keyboadr-thumbnail-slim.png",
    caption: "keyboadr",
  },
  {
    src: "/images/projects/keyboadr-thumbnail-slim.png",
    caption: "keyboadr",
  },
];
const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box css={{ minHeight: "90vh", pt: 200 }}>
      <Container>
        <Multitab tabs={["App.tsx", "Button.tsx"]}>
          <code>hello1</code>
          <code>hello2</code>
        </Multitab>
        {/* <Box
          css={{
            position: "fixed",
            bg: "rgba(0,0,0,0.3)",
            inset: 0,
            display: "grid",
            placeItems: "center",
          }}
        >
          {activeSlide !== null && (
            <Box
              as={motion.div}
              layoutId={`slide-${activeSlide}`}
              css={{ size: 400, bg: "$tab" }}
            >
              {activeSlide}
            </Box>
          )}
        </Box> */}
        <TechStacks stackNames={["TypeScript", "React", "Redux", "Vite"]} />
            <ImageSlider images={Images}  />
      </Container>
    </Box>
  );
};

export default Test;
