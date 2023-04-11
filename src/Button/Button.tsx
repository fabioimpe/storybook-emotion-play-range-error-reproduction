import React, { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  // Redefining these enables Controls on Storybook
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

const ButtonBase = (props: Props) => {
  const { label = "", ...others } = props;
  return <button {...others}>{label}</button>;
};

export const Button = styled(ButtonBase)<Props>`
  background-color: red;
`;
