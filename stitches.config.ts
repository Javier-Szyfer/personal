import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      title: "#000000",
      link: "#0d0d0d",
      text: "#252525",
      circ: "#d6d6d6",
    },
    gridCols: {
      1: "1fr",
      2: "repeat(2, 1fr)",
      3: "repeat(3, 1fr)",
      4: "repeat(4, 1fr)",
      5: "repeat(5, 1fr)",
      6: "repeat(6, 1fr)",
    },
    fontSizes: {
      1: "1rem",
      2: "1.25rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 600,
    },
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),

    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
    bp3: "(min-width: 1200px)",
    bp4: "(min-width: 1500px)",
    dark: "(prefers-color-scheme: dark)",
  },
});

export type CSS = Stitches.CSS<typeof config>;
