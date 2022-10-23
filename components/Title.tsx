import { styled } from "../stitches.config";

export const Title = styled("h1", {
  //reset
  margin: 0,
  padding: 0,
  color: "$title",
  fontSize: "$1",
  py: "$space$1",
  fontWeight: "$fontWeights$3",
  "@bp2": {
    fontWeight: "$fontWeights$1",
  },
});
