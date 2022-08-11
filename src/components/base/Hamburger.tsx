import { styled } from "@stitchesConfig";

const Hamburger = styled("button", {
  position: "relative",
  zIndex: "$4",
  border: "none",
  opacity: 0.75,
  outline: "none",
  width: "45px",
  gap: 10,
  display: "flex",
  bg: "transparent",
  jc: "space-between",
  fd: "column",
  transition: "all 0.3s ease-in-out",
  "& > div": {
    height: 3,
    bg: "$textPrimary",
    br: "$3",
    transition: "all 0.3s ease-in-out",
  },
  "& > div:nth-child(1)": {
    width: "50%",
    transformOrigin: "left center",
  },
  "& > div:nth-child(2)": {
    width: "100%",
    transformOrigin: "center",
  },
  "& > div:nth-child(3)": {
    transformOrigin: "right center",
    width: "50%",
    alignSelf: "flex-end",
  },
  "& > div:nth-child(4)": {
    position: "absolute",
    transformOrigin: "center",
    width: "100%",
    top: "50%",
    transform: "translateY(-50%)",
  },
  "@md": {
    display: "none",
  },
  variants: {
    active: {
      true: {
        gap: 0,
        "& > div": {
          position: "relative",
          bg: "$backgroundPrimary",
        },
        "& > div:nth-child(1)": {
          transform: "translateY(100%)",
          opacity: 0,
          brr: 0,
        },
        "& > div:nth-child(2)": {
          transform: "rotate(-45deg)",
          transitionDelay: "0.3s",
        },
        "& > div:nth-child(3)": {
          transform: "translateY(-100%)",
          opacity: 0,
          blr: 0,
        },
        "& > div:nth-child(4)": {
          transform: "translateY(-50%) rotate(45deg)",
          transitionDelay: "0.3s",
        },
      },
    },
  },
});

export default Hamburger;
