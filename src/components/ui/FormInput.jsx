import PropTypes from "prop-types";

const FormInput = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="form-input w-full rounded-full border border-none bg-transparent px-4 py-4 focus:border-0 focus:shadow-none focus:outline-none focus:ring-0 focus:ring-offset-0"
        {...rest}
      />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "number",
    "tel",
    "url",
    "password",
    "email",
    "search",
  ]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormInput;
