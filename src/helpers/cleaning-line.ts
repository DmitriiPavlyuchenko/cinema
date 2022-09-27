export const removeLinksFromString = (string: string): string => {
  return string.replace(/( |<([^>]+)>)/gi, "  ");
};
