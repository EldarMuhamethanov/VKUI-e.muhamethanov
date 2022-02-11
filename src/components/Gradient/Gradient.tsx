import * as React from "react";
import { classNames } from "../../lib/classNames";
import "./Gradient.css";

export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "tint" | "white" | "black";
  to?: "top" | "bottom";
}

const Gradient: React.FC<GradientProps> = ({
  mode,
  children,
  to,
  ...restProps
}) => {
  return (
    <div
      role="presentation"
      {...restProps}
      vkuiClass={classNames(
        "Gradient",
        `Gradient--md-${mode}`,
        `Gradient--to-${to}`
      )}
    >
      {children}
    </div>
  );
};

Gradient.defaultProps = {
  mode: "tint",
  to: "top",
};

// eslint-disable-next-line import/no-default-export
export default Gradient;
