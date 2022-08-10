import React from "react";
import { Text } from "../base";
import { keyframes } from "@stitchesConfig";

const cursor = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});
const TypeText = ({
  string,
  speed = 200,
  delay = 0,
}: {
  string: string;
  speed?: number;
  delay?: number;
}) => {
  const [index, setIndex] = React.useState(0);
  const [delayTime, setDelayTime] = React.useState(0);

  const increaseIndex = () => {
    if (index < string.length) {
      setIndex(index + 1);
    }
  };
  React.useEffect(() => {
    if (index < string.length) {
      const interval = setInterval(() => {
          if (delayTime >= delay) {
          increaseIndex();
          return;
        }
        setDelayTime((t) => (t += speed));
      }, speed);
      return () => clearInterval(interval);
    }
  });
  return (
    <>
      <p>
        {delayTime} and {index}
      </p>
      <Text
        as="span"
        fontSize="7"
        fontFamily="poppins"
        css={{
          position: "relative",
          "&:after": {
            content: `""`,
            position: "absolute",
            top: 0,
            bottom: 5,
            right: 0,
            width: 2,
            bg: "$textPrimary",
            animation: `${cursor} 800ms ease-in-out infinite`,
          },
        }}
      >
        {string.slice(0, index)}
      </Text>
    </>
  );
};

export default TypeText;
