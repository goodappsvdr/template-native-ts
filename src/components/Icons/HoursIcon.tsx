import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const HoursIcon = (props: SvgProps) => (
  <Svg x={0} y={0} viewBox="0 0 100 100" {...props}>
    <Path d="M47.3 100c-1.8-.2-3.5-.4-5.3-.8-11.3-2.1-20.6-7.6-27.9-16.5C6.4 73.1 3 61.9 4 49.5c.8-9.3 4.2-17.7 10-25 .3-.4.6-.7.8-1.1 0 0 .1-.1.1-.3-.4-.3-.8-.7-1.2-1.1-.1-.1-.2-.2-.2-.3-.2.4-.4.7-.7 1.1-.2.3-.5.6-.8 1-.7-.8-1.3-1.4-1.8-2l6-6c.5.6 1.1 1.2 1.8 2.1-.5.3-1.1.8-1.8 1.3.6.5.9.8 1.4 1.2 7.8-7.5 17.2-11.9 28.1-13.1v-2h-2.5V0h14.2v5.2h-2.7v1.9c2.8.6 5.5 1 8.2 1.8 10.4 3 18.8 8.9 25.1 17.7 6.6 9.2 9.5 19.5 8.4 30.8C94.7 75 85.7 87.8 69.9 95.6c-5 2.5-10.4 3.8-16 4.2-.2 0-.4.1-.6.2h-6zm1-7.8v-6.6c0-1.3.8-2.2 1.9-2.2 1.1 0 2 .9 2 2.2V92.2c20.7-.9 36.2-18.2 36.7-36.7h-6.4c-1.3 0-2.1-.8-2.2-1.9 0-1.1.8-2 2.2-2h6.4c-.9-19.7-17-35.8-36.7-36.7v7c0 1.4-.8 2.3-2 2.3s-1.9-.9-1.9-2.2v-7c-21.6 1.2-36.2 19-36.6 36.7h6.2c1.3 0 2.2.8 2.2 2 0 1.1-.9 1.9-2.2 2H11.7c.4 18.8 16.7 35.9 36.6 36.5" />
    <Path d="M71.3 72.8c-1.5-.4-2.7-.7-4-1.1-.4-.1-.7-.4-1-.6-4.9-4.2-9.7-8.4-14.6-12.7-.5-.4-1-.8-1.8-.8-2.1 0-3.8-2.1-3.6-4.2.2-2.2 2.2-3.8 4.4-3.5 2.2.3 3.7 2.3 3.3 4.5-.1.6.2.9.6 1.2 4.3 3.7 8.5 7.4 12.8 11.1 1.3 1.1 2.3 2.3 2.9 3.8.2.8.6 1.4 1 2.3" />
  </Svg>
);
export default HoursIcon;
