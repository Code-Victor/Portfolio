import React, { useEffect, useCallback } from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { Box, Caption, Text } from "../base";
import { ArrowRight, ArrowLeft } from "../icons";
import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Icon = ({
  icon,
  className,
  location,
  onClick,
  style,
}: {
  icon: React.ReactNode;
  location: "left" | "right";
  className?: string;
  style?: any;
  onClick?: any;
}) => {
  const disabled = className?.includes("slick-disabled");
  return (
    <Box
      onClick={onClick}
      style={style}
      as="button"
      css={{
        $$shadowColor: "$colors$textPrimary",
        apperance: "none",
        border: "none",
        color: "$textPrimary",
        bg: "$tab",
        size: 55,
        opacity: disabled ? 0 : 1,
        br: "$round",
        left: location === "left" ? "-$4" : "auto",
        right: location === "right" ? "-$4" : "auto",
        position: "absolute",
        zIndex: "$4",
        top: "50%",
        transform: "translateY(-50%)",
        boxShadow: "inset 0 0 0 1px $$shadowColor",

        "&:focus": {
          boxShadow: "inset 0 0 0 1.5px $$shadowColor",
          color: "$textPrimary",
        },
      }}
    >
      {icon}
    </Box>
  );
};
const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <Icon
      icon={<ArrowRight style={{ width: 25, height: 25 }} />}
      location="right"
    />
  ),
  prevArrow: (
    <Icon
      icon={<ArrowLeft style={{ width: 25, height: 25 }} />}
      location="left"
    />
  ),

  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
  ],
};

interface image {
  src: string;
  caption: string;
}
const ImageSlider = ({ images }: { images: image[] }) => {
  const [activeSlide, setActiveSlide] = React.useState<null | number>(null);
  const closeModal = () => setActiveSlide(null);
  const escapeModal = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", escapeModal);
    return () => {
      window.removeEventListener("keydown", escapeModal);
    };
  }, [escapeModal]);
  return (
    <>
      {activeSlide !== null ? (
        <Box
          css={{
            position: "fixed",
            inset: 0,
            bg: "rgba(0,0,0,0.5)",
            display: "grid",
            placeItems: "center",
            zIndex: "$max",
          }}
          onClick={closeModal}
        >
          <Caption
            caption={images[activeSlide].caption}
            css={{ width: "90%", maxWidth: 900 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Box as={motion.div} layoutId={`slide-${activeSlide}`}>
              <AspectRatio.Root ratio={16 / 9}>
                <Image
                  src={images[activeSlide].src}
                  alt={images[activeSlide].caption}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                />
              </AspectRatio.Root>
            </Box>
          </Caption>
        </Box>
      ) : null}
      <Slider {...settings}>
        {images.map(({ src, caption }, i) => (
          <Box key={i} onClick={() => setActiveSlide(i)}>
            <motion.div layoutId={`slide-${i}`}>
              <AspectRatio.Root ratio={16 / 9}>
                <Image
                  src={src}
                  alt={caption}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                />
              </AspectRatio.Root>
            </motion.div>
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default ImageSlider;
