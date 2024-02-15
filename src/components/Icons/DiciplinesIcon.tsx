import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const DiciplinesIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" {...props}>
    <Path d="M24.8 69.2H7.4c-4 0-7.3-3.3-7.3-7.3V38.1c0-4 3.3-7.3 7.3-7.3h17.3c4 0 7.3 3.3 7.3 7.3v23.7c.1 4.1-3.2 7.4-7.2 7.4zM92.6 69.2H75.2c-4 0-7.3-3.3-7.3-7.3V38.1c0-4 3.3-7.3 7.3-7.3h17.3c4 0 7.3 3.3 7.3 7.3v23.7c.1 4.1-3.2 7.4-7.2 7.4zM38.5 41h24.3v17.9H38.5z" />
  </Svg>
);
export default DiciplinesIcon;
