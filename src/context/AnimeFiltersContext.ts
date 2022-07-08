import { createContext } from "react";
import { FilterParams } from "../types/filterParams";

const AnimeFiltersContext = createContext<FilterParams>({
  params: { genre: [], rating: [], kind: [], status: [] },
  onChangeParams: () => {},
});

export default AnimeFiltersContext;
