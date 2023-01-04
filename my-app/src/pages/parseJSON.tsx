export const parseJSON = (key: string) => {
  const getItemFromSession = sessionStorage.getItem(key) || "";
  console.log(getItemFromSession);
  if (getItemFromSession) {
    return JSON.parse(getItemFromSession);
  }

  return console.log("the key probably doesnt exist in the session storage");
};
