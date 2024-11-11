export const formatCategoryName = (category) => {
  if (!category) return "";
  // Replace underscores with spaces and convert to lowercase
  const formattedCategory = category.replace(/_/g, " ").toLowerCase();
  // Capitalize only the first character
  return formattedCategory.charAt(0).toUpperCase() + formattedCategory.slice(1);
};
