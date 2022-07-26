import { createContext } from "react";
import { IFilterContent } from "types/filter";

const FiltersContext = createContext<IFilterContent>({} as IFilterContent);

export default FiltersContext;
