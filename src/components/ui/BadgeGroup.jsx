const BadgeGroup = ({ className, children }) => {
  return <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>;
};

export default BadgeGroup;
