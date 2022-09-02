import React, { ReactNode } from "react";
import { styled } from "@stitchesConfig";

const Btn = styled("div", {
  bg: "transparent",
  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$2",
  ai: "center",
  color: "$textPrimary",
  fontWeight: "light",
  bc: "$backgroundPrimary",
  variants: {
    size: {
      sm: {
        py: "$2",
        px: "$3",
        fontSize: "$2",
        fontWeight: "light",
      },
      md: {
        py: "$3",
        px: "$4",
        fontSize: "$3",
        fontWeight: "light",
      },
      lg: {
        py: "$3",
        px: "$6",
        fontSize: "$4",
        fontWeight: "light",
      },
    },
  },
});
const GradientWrapper = styled("button", {
  outline: "none",
  border: "none",
  p: 2,
  "&:active": {
    transform: "scale(0.98)",
    transformOrigin: "center center",
    [`& ${Btn}`]: {
      transform: "scale(0.98)",
      transformOrigin: "center center",
    },
  },
  variants: {
    gradient: {
      1: {
        bg: "$gradient1",
      },
      2: {
        bg: "$gradient2",
      },
      3: {
        bg: "$gradient3",
      },
      4: {
        bg: "$gradient4",
      },
    },
    br: {
      sm: {
        br: "$2",
        [`& ${Btn}`]: {
          br: "$2",
        },
      },
      md: {
        br: "$3",
        [`& ${Btn}`]: {
          br: "$3",
        },
      },
      lg: {
        br: "$4",
        [`& ${Btn}`]: {
          br: "$4",
        },
      },
    },
  },
  defaultVariants: {
    gradient: 1,
    br: "sm",
  },
});

type GradientWrapperProps = React.ComponentProps<typeof GradientWrapper>;
const GradientBtn = ({
  children,
  ...props
}: {
  children: ReactNode;
  as?: React.ElementType;
  href?: string;
} & GradientWrapperProps) => {
  return (
    <GradientWrapper {...props}>
      <Btn
        size={{
          "@initial": "sm",
          "@md": "md",
          "@lg": "lg",
        }}
      >
        {children}
      </Btn>
    </GradientWrapper>
  );
};
export default GradientBtn;
