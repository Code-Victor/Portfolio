import React, { ReactNode } from "react";
import { styled } from "../../stitches.config";
import type * as Stitches from "@stitches/react";

const Btn = styled("div", {
  bg: "transparent",

  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$2",
  ai: "center",
  color: "White",
  fontWeight: "light",
  br: 4,
  bc: "$backgroundPrimary",
  variants: {
    size: {
      sm: {
        py: "$1",
        px: "$2",
        fontSize: "$1",
        fontWeight: "light",
      },
      md: {
        py: "$2",
        px: "$3",
        fontSize: "$2",
        fontWeight: "light",
      },
      lg: {
        py: "$3",
        px: "$4",
        fontSize: "$3",
        fontWeight: "light",
    },
    xl: {
        py: "$2",
        px: "$6",
        fontSize: "$3",
        fontWeight: "light",
      },
    },
  },
});
const GradientWrapper = styled("button", {
  outline: "none",
  border: "none",
  br: 4,
  p: 2,
  variants: {
    gradient: {
      1: {
        bg: "linear-gradient(51.06deg, #9358F7 0.87%, #9259F7 7.31%, #8E5DF6 13.75%, #8862F5 20.19%, #806BF4 26.63%, #7575F2 33.07%, #6882F0 39.51%, #5990EE 45.95%, #4A9FEB 52.39%, #3BADE9 58.84%, #2EBAE7 65.28%, #23C4E5 71.72%, #1BCDE4 78.16%, #15D2E3 84.6%, #11D6E2 91.04%, #10D7E2 97.48%)",
      },
      2: {
        bg: "linear-gradient(135deg, #6964DE 2.88%, #FCA6E9 100%)",
      },
      3: {
        bg: "linear-gradient(45.4deg, #F4426C 6.41%, #FBF2B1 98.99%)",
      },
      4: {
        bg: "linear-gradient(132.33deg, #D24074 -0.67%, #6518B4 102.54%)",
      },
    },
  },
  defaultVariants: {
    gradient: 1,
  },
});

type GradientWrapperProps = Stitches.VariantProps<typeof GradientWrapper>;
const GradientBtn = ({
  children,
  ...props
}: { children: ReactNode } & GradientWrapperProps) => {
  return (
    <GradientWrapper {...props}>
      <Btn
      size={
        {
            '@initial': 'sm',
            '@md': 'md',
             '@lg': 'lg',        
        }
      }
      >{children}</Btn>
    </GradientWrapper>
  );
};
export default GradientBtn;

