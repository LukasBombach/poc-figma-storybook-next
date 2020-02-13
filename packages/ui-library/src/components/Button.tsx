import React, { ReactNode } from "react";
import { css } from "linaria";
import styles from "../styles";

const { primary: primaryColor, white, accent } = styles.color;
const { size24, size40 } = styles.size;
const { round } = styles.border;

interface ButtonProps {
  children?: ReactNode;
  type?: "primary" | "secondary";
}

const primary = css`
  color: ${white};
  background: ${primaryColor};
  border-radius: ${round};
  padding: ${size24} ${size40};

  &:hover {
    background: ${accent};
  }
`;

const secondary = css`
  color: ${primaryColor};
  border-radius: ${round};
  border-color: ${primaryColor};
  padding: ${size24} ${size40};

  &:hover {
    color: ${accent};
    border-color: ${accent};
  }
`;

export default ({ children, type = "primary" }: ButtonProps) => {
  const className = { primary, secondary }[type];
  return <button className={className}>{children}</button>;
};
