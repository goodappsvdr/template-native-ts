import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const CloseSesion = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" {...props}>
    <Path d="M58.5 87.2c5.6-2.8 10.2-6.7 14-11.7 1.1-1.5 1.5-3.1 1.3-4.9-.2-1.8-1.1-3.3-2.6-4.4-1.5-1.1-3.1-1.5-4.9-1.3-1.8.3-3.3 1.1-4.4 2.6-2.6 3.4-5.7 6-9.4 7.8-3.7 1.8-7.6 2.8-11.8 2.8-3.6 0-7-.7-10.3-2.1-3.3-1.4-6.1-3.3-8.5-5.7-2.4-2.4-4.3-5.2-5.7-8.5-1.4-3.3-2.1-6.7-2.1-10.3 0-3.6.7-7 2.1-10.3 1.4-3.3 3.3-6.1 5.7-8.5 2.4-2.4 5.2-4.3 8.5-5.7 3.3-1.4 6.7-2.1 10.3-2.1 4.2 0 8.1.9 11.8 2.8 3.7 1.9 6.8 4.5 9.4 7.9 1.1 1.5 2.6 2.3 4.4 2.6 1.8.3 3.4-.2 4.9-1.3 1.5-1.1 2.3-2.5 2.6-4.3.2-1.8-.2-3.5-1.3-4.9-3.8-5-8.4-9-14-11.7-5.6-2.8-11.5-4.2-17.8-4.2-5.4 0-10.5 1.1-15.4 3.2s-9.1 4.9-12.7 8.5C9 27 6.1 31.2 4 36.1 1.9 41 .9 46.2.9 51.6S1.9 62.1 4 67s4.9 9.1 8.5 12.7c3.6 3.6 7.8 6.4 12.7 8.5 4.9 2.1 10.1 3.2 15.4 3.2 6.4 0 12.3-1.4 17.9-4.2zm0 0" />
    <Path d="M40.3 58.1h39.5v10c0 .4.2.8.5 1.2.3.3.7.5 1.2.5s.9-.2 1.2-.5l16.6-16.6c.3-.3.5-.7.5-1.2s-.2-.9-.5-1.2L82.7 33.8c-.4-.3-.8-.5-1.2-.5-.5 0-.9.2-1.2.5-.3.3-.5.7-.5 1.2v10H40.3c-.5 0-.8.2-1.2.5-.3.3-.5.7-.5 1.2v9.9c0 .5.2.8.5 1.2.3.2.7.3 1.2.3zm0 0" />
  </Svg>
);
export default CloseSesion;
