import React, { ReactElement, useRef, useEffect } from "react";

import "../../styles.css";

type ButtonProps = {
  variant?: "fill" | "outline" | "transparent";
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  children: string | ReactElement;
  size?: "sm" | "md" | "lg";
  icon?: React.CElement<SVGElement, any>;
  onClick?: (e: any) => void;
  disabled?: boolean;
};

export const Button = ({
  variant,
  color,
  children,
  size,
  icon,
  onClick,
  disabled,
}: ButtonProps) => {
  const button = useRef<HTMLButtonElement>(null);

  function handleMouseDown() {
    button.current?.classList.add("clicked");
  }

  function handleMouseUp() {
    setTimeout(() => {
      button.current?.classList.remove("clicked");
    }, 200);
  }

  useEffect(() => {
    if (!disabled) {
      button.current?.addEventListener("mousedown", handleMouseDown);
      button.current?.addEventListener("mouseup", handleMouseUp);

      return () => {
        button.current?.removeEventListener("mousedown", handleMouseDown);
        button.current?.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, []);

  return (
    <button
      ref={button}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      }}
      className={`button-${
        disabled
          ? "disabled"
          : variant
          ? color
            ? variant + "-" + color
            : variant + "-primary"
          : "fill-primary"
      } ${size ? size : "md"} custom-button`}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};
