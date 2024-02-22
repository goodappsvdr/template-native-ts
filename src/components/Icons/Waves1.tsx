import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Waves1 = (props: SvgProps) => (
  <Svg viewBox="0 0 1440 320" height={100} {...props}>
    <Path d="m0 224 80-5.3c80-5.7 240-15.7 400 0C640 235 800 277 960 288s320-11 400-21.3l80-10.7v64H0Z" />
  </Svg>
);
export default Waves1;
