import PropTypes from "prop-types";

const Button = ({
  type = "button",
  variant = "primary",
  children,
  href,
  onClick,
  ...rest
}) => {
  if (href) {
    return (
      <a
        className="rounded-full bg-green-600 px-5 py-2 font-semibold text-green-950 transition duration-300 ease-in-out hover:bg-green-900 hover:text-green-100"
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className="rounded-full bg-green-600 px-5 py-2 font-semibold text-green-950 transition duration-300 ease-in-out hover:bg-green-900 hover:text-green-100"
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "inverted"]),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
