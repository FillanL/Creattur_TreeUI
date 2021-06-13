export const ishttps = (link: string) => {
  const dotcom = link.substring(link.length - 4) === ".com";
  const begin = link.substring(0, 8) === "https://";
  if (begin && dotcom) return true;
  return false;
};
