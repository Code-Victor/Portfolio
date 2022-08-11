import { styled } from "@stitchesConfig";

const FloatingActionButton = styled("button", {
  position: "fixed",
  border: "none",
  outline: "none",
  bottom: "3vh",
  right: "5vw",
  padding: 4,
  bg: "$gradient4",
  zIndex: "$3",
  borderRadius: "50%",
  "&>*:first-child": {
    borderRadius: "50%",
    background: "$textPrimary",
    size: "55px",
    color: "$backgroundPrimary",
    display: "grid",
    placeItems: "center",
  },
});
export default FloatingActionButton