import React from "react";
import classNames from "classnames";

const baseStyles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
};

export const Typography = ({
  element: Element = "p",
  styledAs = Element,
  className,
  children,
}) => {
  return (
    <Element className={classNames(baseStyles[styledAs], className)}>
      {children}
    </Element>
  );
};
