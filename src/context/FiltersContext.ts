import { createContext } from "react";
import { Filter } from "../types/filter";

const FiltersContext = createContext<Filter>({
  params: { genre: [], rating: [], kind: [], status: [] },
  onChangeParams: () => {},
});

export default FiltersContext;
