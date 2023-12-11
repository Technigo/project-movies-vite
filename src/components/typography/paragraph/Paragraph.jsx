// Reusable component for all p-tag, takes in text as a prop
export const Paragraph = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
