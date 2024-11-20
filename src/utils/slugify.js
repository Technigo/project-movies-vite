export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except hyphens
    .trim();
};
