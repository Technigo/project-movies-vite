import React from "react";
import classNames from "classnames";

const baseStyles = {
  h1: "text-3xl 2xl:text-4xl 4xl:text-5xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-semibold",
  p: "text-base",
  bodyLarge: "text-lg xl:text-lg 2xl:text-xl 3xl:text-2xl font-light",
  bodyDefault: "text-base",
  bodySmall: "text-sm",
};

export const Typography = ({
  element: Element = "p",
  styledAs = Element,
  className,
  children,
  ...rest
}) => {
  return (
    <Element className={classNames(baseStyles[styledAs], className)} {...rest}>
      {children}
    </Element>
  );
};
