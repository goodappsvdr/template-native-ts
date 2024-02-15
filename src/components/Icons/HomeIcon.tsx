import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const HomeIcon = (props: SvgProps) => (
  <Svg id="HomeIcon" viewBox="0 0 100 100" {...props}>
    <Path d="M49.8 27.9 14.3 57.2V87.3c0 1.1.4 2 1.2 2.8.8.8 1.7 1.2 2.8 1.2H42V67.5h15.8v23.7h23.7c1.1 0 2-.4 2.8-1.2.8-.8 1.2-1.7 1.2-2.8V57.6c0-.2 0-.3-.1-.4L49.8 27.9zm0 0" />
    <Path d="M98.9 50.6 85.4 39.3V14.1c0-.6-.2-1.1-.6-1.4-.4-.4-.8-.6-1.4-.6H71.6c-.6 0-1.1.2-1.4.6-.4.4-.6.8-.6 1.4v12.1L54.5 13.5c-1.3-1.1-2.9-1.6-4.7-1.6-1.8 0-3.4.5-4.7 1.6L.7 50.5c-.4.4-.7.8-.7 1.4 0 .6.1 1 .4 1.5L4.2 58c.3.4.8.6 1.3.7.5 0 1-.1 1.5-.4l42.8-35.7 42.8 35.7c.3.3.8.4 1.3.4h.2c.5-.1 1-.3 1.3-.7l3.8-4.6c.3-.4.5-.9.4-1.5 0-.6-.3-1-.7-1.3zm0 0" />
  </Svg>
);
export default HomeIcon;
