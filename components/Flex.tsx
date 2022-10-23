import { styled } from "../stitches.config";

export const StyledFlex = styled("li", {
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Circle = styled("div", {
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: "radial-gradient(#f3f3f3, #d8d8d8)",
  display: "none",
  "@bp2": {
    display: "inline-block",
  },
});
export const Flex = ({ children }): any => {
  return (
    <StyledFlex>
      {children}
      <Circle />
    </StyledFlex>
  );
};
