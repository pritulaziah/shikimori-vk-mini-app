import { useMemo, useState } from "react";
import AnimeFiltersContext from "../context/AnimeFiltersContext";
import { FilterParams } from "../types/filterParams";

interface IProps {
  children: React.ReactNode;
}

const AnimeFiltersProvider = ({ children }: IProps) => {
  const [params, setParams] = useState<FilterParams["params"]>({
    genre: [],
    rating: [],
    kind: [],
    status: [],
  });

  const value = useMemo(() => {
    const onChangeParams: FilterParams["onChangeParams"] = (
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
    <AnimeFiltersContext.Provider value={value}>
      {children}
    </AnimeFiltersContext.Provider>
  );
};

export default AnimeFiltersProvider;
