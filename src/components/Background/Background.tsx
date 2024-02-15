import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 1440 320" {...props}>
    <Path
      fill="#fab60a"
      d="m0 96 60 32c60 32 180 96 300 106.7 120 10.3 240-31.7 360-64 120-31.7 240-53.7 360-53.4 120-.3 240 21.7 300 32l60 10.7V0H0Z"
    />
  </Svg>
);
export { SvgComponent as Background };
