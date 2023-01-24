import React, { ReactElement } from "react";
import { JsxElement } from "typescript";

import { ButtonProps, Button } from "./../Buttons/Button";

import "../../styles.css";

type ButtonGroupProps = {
  orientation?: "column" | "row";
  children: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
  gap?: number;
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  wrap?: boolean;
};

export const ButtonGroup = ({
  orientation,
  children,
  gap,
  align,
  justify,
  wrap,
}: ButtonGroupProps) => {
  return (
    <div
      className={`button-group ${orientation ? orientation : "row"}`}
      style={{
        gap: `${gap ? gap + "px" : "10px"}`,
        alignItems: `${align ? align : "center"}`,
        justifyContent: `${justify ? justify : "space-evenly"}`,
        flexWrap: `${wrap ? "wrap" : "nowrap"}`,
      }}
    >
      {children}
    </div>
  );
};
