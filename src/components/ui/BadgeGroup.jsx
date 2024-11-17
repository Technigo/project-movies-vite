const BadgeGroup = ({ className, children }) => {
  return <div className={`flex gap-2 ${className}`}>{children}</div>;
};

export default BadgeGroup;
