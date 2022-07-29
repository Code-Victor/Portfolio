import React, { ReactNode } from "react";
import { CSS, styled } from "../../stitches.config";

const Btn = styled("div", {
  bg: "transparent",

  height: "100%",
  width: "100%",
  display: "flex",
  gap: "$2",
  ai: "center",
  color: "$textPrimary",
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
        bg:'$gradient1'
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
  },
  defaultVariants: {
    gradient: 1,
  },
});

type GradientWrapperProps = React.ComponentProps<typeof GradientWrapper>;
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

