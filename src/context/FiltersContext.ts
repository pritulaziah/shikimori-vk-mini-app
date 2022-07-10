import { createContext } from "react";
import { Filter } from "../types/filter";

const FiltersContext = createContext<Filter | null>(null);

export default FiltersContext;
