import { useMemo, useState } from "react";
import FiltersContext from "../context/FiltersContext";
import { Filter } from "../types/filter";

interface IProps {
  children: React.ReactNode;
}

const FiltersProvider = ({ children }: IProps) => {
  const [params, setParams] = useState<Filter["params"]>({
    genre: [],
    rating: [],
    kind: [],
    status: [],
  });

  const value = useMemo(() => {
    const onChangeParams: Filter["onChangeParams"] = (
      paramName,
      paramValue
    ) => {
      setParams((prevState) => {
        const newState = { ...prevState };
        newState[paramName] = paramValue;

        return newState;
      });
    };

    return { params, onChangeParams };
  }, [params]);

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
