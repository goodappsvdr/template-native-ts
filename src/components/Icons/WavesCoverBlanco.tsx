import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const WavesBlanco = (props: SvgProps) => (
  <Svg viewBox="0 0 480 60" {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.96}
      d="M-6.197 36.192C81.348 50.475 249.075 12.03 289.358 13.784 320.622 11.647 408.953 15.738 487.405 30v30H-6.197V36.192Z"
    />
  </Svg>
);
export default WavesBlanco;
