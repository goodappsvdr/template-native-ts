import Svg, { SvgProps, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props: SvgProps) => (
  <Svg id="usericon" x={0} y={0} viewBox="0 0 100 100" {...props}>
    <Path d="M33 42.7c4.8 4.8 10.6 7.2 17.4 7.2 6.8 0 12.6-2.4 17.4-7.2 4.8-4.8 7.2-10.6 7.2-17.4s-2.4-12.6-7.2-17.4C63 3.1 57.2.7 50.4.7 43.6.7 37.8 3.1 33 7.9c-4.8 4.8-7.2 10.6-7.2 17.4s2.4 12.6 7.2 17.4zm0 0" />
    <Path d="M94.5 69c-.5-2.5-1-4.8-1.7-7-.7-2.1-1.6-4.2-2.8-6.3-1.2-2-2.5-3.8-4-5.2-1.5-1.4-3.3-2.6-5.5-3.4-2.2-.9-4.5-1.3-7.2-1.3-.4 0-1.3.5-2.8 1.4-1.4.9-3 1.9-4.7 3.1-1.7 1.1-4 2.2-6.9 3.1-2.9.9-5.8 1.4-8.7 1.4-2.9 0-5.8-.5-8.7-1.4-2.9-.9-5.2-1.9-6.9-3.1-1.7-1.1-3.3-2.2-4.7-3.1-1.4-.9-2.3-1.4-2.8-1.4-2.6 0-5 .4-7.2 1.3s-4 2-5.5 3.4-2.8 3.2-4 5.2c-1.2 2-2.1 4.1-2.8 6.3-.7 2.1-1.3 4.5-1.7 7-.5 2.5-.8 4.8-.9 7-.1 2.2-.2 4.4-.2 6.6 0 5.1 1.6 9.2 4.7 12.2s7.3 4.5 12.5 4.5h56.1c5.2 0 9.3-1.5 12.5-4.5 3.1-3 4.7-7 4.7-12.2 0-2.3-.1-4.5-.2-6.6.2-2.2-.1-4.5-.6-7zm0 0" />
  </Svg>
);
export { SvgComponent as UserIcon };
