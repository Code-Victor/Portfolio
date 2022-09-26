import React from "react";
import { styled } from "@stitchesConfig";

const FigCaption = styled("figcaption", {
  fontWeight: "$3",
  opacity: 0.8,
  position: "relative",
  ta: "center",
  width: "fit-content",
  mx: "auto",
  "&::before": {
    position: "absolute",
    content: '""',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    br: "50%",
    filter: "blur(8px)",
    bg: "$backgroundPrimary",
    zIndex: -1,
  },
});
const Figure = styled("figure");
type FigureTypes = React.ComponentProps<typeof Figure>;
const Caption = ({
  caption,
  children,
  ...props
}: {
  caption: string;
  children: React.ReactNode;
} & FigureTypes) => {
  return (
    <Figure {...props}>
      {children}
      <FigCaption>{caption}</FigCaption>
    </Figure>
  );
};

export default Caption;
