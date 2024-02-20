import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ClaimsIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 100 100" {...props}>
    <Path d="M93.1 26.9c-4.5-5.5-10.5-9.8-18.2-13-7.7-3.2-16-4.8-25.1-4.8-6.8 0-13.2.9-19.4 2.8-6.2 1.9-11.5 4.4-15.9 7.6-4.5 3.2-8 7-10.6 11.4-2.6 4.4-4 9-4 13.9 0 5.6 1.7 10.8 5 15.7 3.4 4.9 8 9 13.8 12.3-.4 1.5-.9 2.9-1.4 4.2-.6 1.3-1.1 2.4-1.5 3.3-.4.9-1 1.8-1.8 2.8-.8 1-1.3 1.8-1.7 2.2-.4.4-1 1.1-1.9 2.1-.9 1-1.5 1.6-1.7 1.9 0 0-.2.2-.4.5-.3.3-.4.5-.4.5l-.3.5c-.2.3-.3.5-.3.5 0 .1 0 .3-.1.6s-.1.5 0 .7v.1c.2.7.5 1.2 1 1.6.5.4 1.1.6 1.7.5 2.4-.3 4.5-.7 6.4-1.2 9.7-2.5 18.3-7 25.6-13.5 2.8.3 5.5.4 8.1.4 9.1 0 17.4-1.6 25.1-4.8 7.7-3.2 13.7-7.5 18.2-13s6.7-11.5 6.7-17.9c-.2-6.4-2.4-12.4-6.9-17.9zm0 0" />
  </Svg>
);
export default ClaimsIcon;