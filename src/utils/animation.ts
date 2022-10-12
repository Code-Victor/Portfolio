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
      delay: i * 0.08 + 1.2,
      duration: 0.2,
      ease: "easeInOut",
      type: "tween",
    },
  }),
  visible: {
    opacity: 1,
    y: 0,
  },
  "-slideReveal-init": { opacity: 0, x: -100 },
  "-slideReveal-final": { opacity: 1, x: 0, transition: { duration: 0.6 } },
  "slideReveal-init": { opacity: 0, x: 100 },
  "slideReveal-final": { opacity: 1, x: 0, transition: { duration: 0.6 } },
  "flex-init": { flex: 0 },
  "flex-final": { flex: 1, transition: { duration: 1.2 } },
  "opacity-init": { opacity: 0 },
  "opacity-final": { opacity: 1, transition: { duration: 1.2 } },
  hidden: { opacity: 0, y: -20 },
  hiddenMd: { opacity: 0, y: -50 },
  hiddenLg: { opacity: 0, y: -100 },
  "hidden-reverse": { opacity: 0, y: 25 },
};

export default variants;
