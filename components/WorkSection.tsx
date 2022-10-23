import { styled } from "../stitches.config";

export const WorkSection = styled("ul", {
  listStyleType: "none",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "6px",
  color: "$text",
  margin: 0,
  padding: 0,
  lineHeight: 1.3,
  "@bp2": {
    display: "block",
  },
});
