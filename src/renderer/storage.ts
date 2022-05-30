export const getDeepLAccessKey = () => {
  return localStorage.getItem("deepL_access_key");
};

export const setDeepLAccessKey = (key: string) => {
  localStorage.setItem("deepL_access_key", key);
};
