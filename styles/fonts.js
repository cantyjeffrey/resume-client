import { fontFace } from "polished";
import { injectGlobal } from "styled-components";

const FONT_FAMILY_NAME = `Apercu`;

const fonts = [
  {
    family: `${FONT_FAMILY_NAME}`,
    path: `/static/fonts/${FONT_FAMILY_NAME}`,
    formats: ["woff2", "woff", "ttf", "eot", "svg"],
    weight: 400,
    style: "normal"
  },
  {
    family: `${FONT_FAMILY_NAME}`,
    path: `/static/fonts/${FONT_FAMILY_NAME}-Bold`,
    formats: ["woff2", "woff", "ttf", "eot", "svg"],
    weight: 600,
    style: "normal"
  }
];

fonts.map(
  ({ family, path, formats, weight, style }) =>
    injectGlobal`${fontFace({
      fontFamily: family,
      fontFilePath: path,
      fileFormats: formats,
      fontWeight: weight,
      fontStyle: style
    })}`
);
