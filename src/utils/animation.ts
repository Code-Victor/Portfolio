import { Variants } from "framer-motion";

const variants: Variants = {
  visibleCustom: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 3.5 + 0.8,
      ease: "easeInOut",
    },
  }),
  visibleCustomNoD: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.8,
    },
  }),
  visibleText: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.025 + 1.2,
      duration: 0.05,
      ease: "easeInOut",
      type: "tween",
    },
  }),
  visible: {
    opacity: 1,
    y: 0,
  },

  hidden: { opacity: 0, y: -20 },
  hiddenLg: { opacity: 0, y: -100 },
  "hidden-reverse": { opacity: 0, y: 25 },
};

export default variants;
