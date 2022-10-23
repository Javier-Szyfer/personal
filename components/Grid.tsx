import { styled } from "../stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "$gridCols$1",

  "@bp1": {
    gridTemplateColumns: "$gridCols$2",
    gap: "$space$4",
    py: "$space$1",
  },
  "@bp2": {
    gridTemplateColumns: "$gridCols$3",
    width: "70%",
    gap: "$space$3",
  },
  "@bp3": {
    gridTemplateColumns: "$gridCols$3",
    width: "60%",
    gap: "$space$3",
  },
  "@bp4": {
    width: "40%",
    gap: "$space$2",
  },
});
