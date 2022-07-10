import { useContext } from "react";
import AdultContext from "../context/AdultContext";

const useAdult = () => {
  const context = useContext(AdultContext);

  return context;
};

export default useAdult;
