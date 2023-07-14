import React from "react";

import style from "./style.module.scss";

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { type = "button", disabled = false, onClick, children } = props;
  return (
    <button
      type={type}
      className={style.botao}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
