import { useContext } from "react";
import FiltersContext from "context/FiltersContext";

const useFilter = () => {
  const context = useContext(FiltersContext);

  return context;
};

export default useFilter;
