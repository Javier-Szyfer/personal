import { styled } from "../stitches.config";

export const ContactLinks = styled("div", {
  listStyleType: "none",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  gap: "$space$1",
  color: "$text",
  textAlign: "center",
  "> li ": {
    display: "flex",
  },
  padding: 0,
  lineHeight: 1.3,
  mb: "$space$1",
  "@bp2": {
    display: "block",
    my: 0,
  },
});
