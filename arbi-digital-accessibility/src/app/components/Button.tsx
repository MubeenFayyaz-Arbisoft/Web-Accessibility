"use client";

import React from "react";
import { cn } from "../lib/utils";
import style from "../styles/components/Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  icon?: string; // now expects a string name from material symbols
  text?: string;
  rounded?: boolean;
}

const Button = ({
  variant = "filled",
  icon,
  text,
  rounded = false,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center gap-1 transition duration-200";
  const styles = {
    filled: `${style.buttonFilled} text-white `,
    outline: `${style.buttonOutline} text-white `,
  };
  const radius = rounded ? "rounded-full" : "rounded-md";

  return (
    <button className={cn(base, styles[variant], radius, className)} {...props}>
      {text && <span>{text}</span>}
      {icon && (
        <span className="material-symbols-outlined">{icon}</span>
      )}
    </button>
  );
};

export default Button;


// use code in other files for button
//   <Button text="Support" rounded={true} variant="filled" icon="arrow_forward" />