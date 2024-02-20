import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

interface CustomTextProps extends TextProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

const CustomText = ({ children, style, ...props }: CustomTextProps) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat-Black",
  },
});

export default CustomText;
