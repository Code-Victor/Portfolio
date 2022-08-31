import React from "react";
import { styled } from "@stitchesConfig";

const FigCaption = styled("figcaption", {
  fontWeight: "$3",
  opacity: 0.8,
  ta: "center",
});

const Caption = ({
  caption,
  children,
  ...imgProps
}: {
  caption: string;
  children: React.ReactNode;
}) => {
  return (
    <figure>
      {children}
      <FigCaption>{caption}</FigCaption>
    </figure>
  );
};

export default Caption;
