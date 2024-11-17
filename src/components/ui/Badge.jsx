const Badge = ({
  variant = "primary",
  size = "default",
  className = "",
  children,
}) => {
  const variantClasses = {
    primary: "bg-green-200 text-green-950",
    secondary: "bg-green-950 text-green-100",
    outline: "border-2 border-solid text-green-950",
  };

  const sizeClasses = {
    small: "text-sm px-2 py-1",
    default: "text-md px-2",
    large: "text-lg px-3 py-1",
  };

  const classes = `inline-flex gap-1 font-semibold items-center rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return <span className={classes}>{children}</span>;
};

export default Badge;
