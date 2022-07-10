import { useState, useMemo, useEffect } from "react";
import AdultContext from "../context/AdultContext";
import getLocalStorage from "../utils/getLocalStorage";

interface IProps {
  children: React.ReactNode;
}

const AdultProvider = ({ children }: IProps) => {
  const [adult, setAdult] = useState<boolean>(() => {
    const localStorage = getLocalStorage();

    if (localStorage && typeof localStorage.getItem("adult") === "string") {
      return localStorage.getItem("adult") === "1" ? true : false;
    }

    return false;
  });

  useEffect(() => {
    const localStorage = getLocalStorage();

    if (localStorage) {
      localStorage.setItem("adult", adult ? "1" : "0");
    }
  }, [adult]);

  const value = useMemo(
    () => ({ adult, onChangeAdult: () => setAdult((prevState) => !prevState) }),
    [adult]
  );

  return (
    <AdultContext.Provider value={value}>{children}</AdultContext.Provider>
  );
};

export default AdultProvider;
