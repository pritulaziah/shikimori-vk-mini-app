const checkSupportLocalStorage = () => {
  try {
    return (
      typeof window !== "undefined" &&
      "localStorage" in window &&
      window.localStorage !== null
    );
  } catch (e) {
    return false;
  }
};

const getLocalStorage = () =>
  checkSupportLocalStorage() ? window.localStorage : null;

export default getLocalStorage;
