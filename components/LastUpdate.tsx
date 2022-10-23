import { styled } from "../stitches.config";

export const LastUpdate = styled("span", {
  bottom: "$space$2",
  left: "$space$2",
  my: "$space$2",
  "@bp2": {
    position: "fixed",
    my: 0,
  },
});
