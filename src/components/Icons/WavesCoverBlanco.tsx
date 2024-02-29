import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const WavesBlanco = (props: SvgProps) => (
  <Svg viewBox="0 0 480 60" {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.96}
      d="M-6.197 36.192c88.646 15.19 186.124-7.616 216.299-11.65C308.138 7.743 377.548 12.138 487.405 30v30H-6.197V36.192Z"
    />
  </Svg>
);
export default WavesBlanco;
