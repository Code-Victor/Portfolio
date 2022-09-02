import React from "react";
import { styled } from "@stitchesConfig";

const FigCaption = styled("figcaption", {
  fontWeight: "$3",
  opacity: 0.8,
  ta: "center",
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
