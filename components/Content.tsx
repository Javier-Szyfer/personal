import { styled } from "../stitches.config";

export const Content = styled("section", {
  display: "flex",
  height: "100%",
  width: "100%",
  px: "$space$2",
  py: "$space$1",
  fontWeight: "$fontWeights$1",
  flexDirection: "column",
  "@bp2": {
    p: "$space$2",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
