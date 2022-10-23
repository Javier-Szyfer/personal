import React from "react";
import { styled } from "../stitches.config";

export const StyledLink = styled("a", {
  //reset
  color: "$link",
  py: ".2rem",
  px: "1rem",
  width: "100%",
  borderRadius: "999999px",
  border: "1px solid $link",
  textAlign: "center",
  "&:hover": {
    color: "$text",
    backgroundColor: "$circ",
  },
  "@bp2": {
    p: 0,
    border: "none",
    textAlign: "left",
    width: "100%",
    "&:hover": {
      color: "$title",
      backgroundColor: "transparent",
    },
  },
  textDecoration: "none",
});

type LinkProps = {
  href: string;
  title: string;
};

export const Link = ({ href, title }: LinkProps) => {
  return (
    <StyledLink href={href} rel="noopener" target="_blank">
      {title}
    </StyledLink>
  );
};
