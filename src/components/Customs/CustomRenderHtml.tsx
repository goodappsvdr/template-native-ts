import React from "react";
import RenderHTML, {
  MixedStyleRecord,
  defaultSystemFonts,
} from "react-native-render-html";

interface CustomRenderHtmlProps {
  htmlContent: string;
  width: number;
}

const systemFonts = [
  ...defaultSystemFonts,
  "Montserrat-Black",
  "Montserrat-Bold",
  "Montserrat-Regular",
];

const tagsStyles: MixedStyleRecord = {
  body: {
    padding: 16,
    fontFamily: "Montserrat-Black",
  },
  p: {
    margin: 0,
    padding: 0,
    fontFamily: "Montserrat-Regular",
  },
  b: {
    fontFamily: "Montserrat-Black",
    fontWeight: "normal",
  },

  h4: {
    fontFamily: "Montserrat-Black",
    fontWeight: "normal",
  },

  'span[style="font-weight: bolder;"]': {
    fontFamily: "Montserrat-Black",
    fontWeight: "normal",
  },
};

const CustomRenderHtml = ({ htmlContent, width }: CustomRenderHtmlProps) => {
  console.log(htmlContent);
  return (
    <RenderHTML
      source={{ html: htmlContent }}
      contentWidth={width}
      tagsStyles={tagsStyles}
      ignoredDomTags={["font"]}
      systemFonts={systemFonts}
    />
  );
};

export default CustomRenderHtml;
