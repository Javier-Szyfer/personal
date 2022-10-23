import { styled } from "../stitches.config";

export const StyledLink = styled("a", {
  //reset
  color: "$link",
  fontWeight: "$fontWeights$2",
  "&:hover": {
    color: "$title",
  },
  "@bp2": {
    p: 0,
    border: "none",
    textAlign: "left",
    width: "100%",
    fontWeight: "$fontWeights$1",
  },
  textDecoration: "none",
});

type LinkProps = {
  href: string;
  title: string;
};

export const Workplace = ({ href, title }: LinkProps) => {
  return (
    <StyledLink href={href} rel="noopener" target="_blank">
      {title}
    </StyledLink>
  );
};
