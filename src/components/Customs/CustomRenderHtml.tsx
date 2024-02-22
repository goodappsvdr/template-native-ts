import React from "react";
import RenderHTML, { MixedStyleRecord } from "react-native-render-html";

interface CustomRenderHtmlProps {
  htmlContent: string;
  width: number;
}

const tagsStyles: MixedStyleRecord = {
  body: {
    padding: 16,
  },
  p: {
    margin: 0,
    marginBottom: 8,
    padding: 0,
  },
};

const CustomRenderHtml = ({ htmlContent, width }: CustomRenderHtmlProps) => {
  const htmlContentFormatted = htmlContent
    .replace(/&nbsp;/g, "")
    // .replace(/<br>/g, "")
    .replace(/bolder/g, "900");
  return (
    <RenderHTML
      source={{ html: htmlContentFormatted }}
      contentWidth={width}
      tagsStyles={tagsStyles}
    />
  );
};

export default CustomRenderHtml;
