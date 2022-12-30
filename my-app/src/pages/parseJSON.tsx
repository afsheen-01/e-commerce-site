export const parseJSON = (key: string) => {
  const getItemFromSession = sessionStorage.getItem(key) || "";
  return JSON.parse(getItemFromSession);
};
