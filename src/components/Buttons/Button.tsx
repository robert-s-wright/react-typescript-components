import React, { ReactElement, useRef } from "react";

import "../../styles.css";

type ButtonProps = {
  variant?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  children: string | ReactElement;
  size?: "sm" | "md" | "lg";
  icon?: React.CElement<SVGElement, any>;
  onClick?: (e: any, ...rest: any) => void;
};

export const Button = ({
  variant,
  children,
  size,
  icon,
  onClick,
}: ButtonProps) => {
  const button = useRef<HTMLButtonElement>(null);

  function handleClick() {
    button.current?.addEventListener("mousedown", () => {
      button.current?.classList.add("clicked");
    });

    button.current?.addEventListener("mouseup", () => {
      setTimeout(() => {
        button.current?.classList.remove("clicked");
      }, 200);
    });
  }

  return (
    <button
      ref={button}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        handleClick();
      }}
      className={`button-${variant ? variant : "primary"} ${
        size ? size : "md"
      } custom-button`}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};
