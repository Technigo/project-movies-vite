const Badge = ({ children }) => {
  return (
    <span className="text-md mt-8 inline-flex items-center rounded-full border-2 border-solid bg-green-200 px-2 font-medium text-green-950">
      {children}
    </span>
  );
};

export default Badge;
