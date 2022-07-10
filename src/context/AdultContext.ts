import { createContext } from "react";

const AdultContext = createContext<{
  adult: boolean;
  onChangeAdult: () => void;
}>({ adult: false, onChangeAdult: () => {} });

export default AdultContext;
