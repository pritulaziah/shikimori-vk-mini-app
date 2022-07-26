import { useMemo, useState } from "react";
import FiltersContext from "context/FiltersContext";
import { Params } from "types/filter";

interface IProps {
  children: React.ReactNode;
}

const FiltersProvider = ({ children }: IProps) => {
  const [params, setParams] = useState<Params>({
    genre: [],
    rating: [],
    kind: [],
    status: [],
    score: [],
  });

  const value = useMemo(() => {
    const onChangeParams = (paramName: keyof Params, paramValue: string[]) => {
      setParams((prevState) => {
        const newState = { ...prevState };
        newState[paramName] = paramValue;

        return newState;
      });
    };

    return { params, onChangeParams };
  }, [params]);

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export default FiltersProvider;
