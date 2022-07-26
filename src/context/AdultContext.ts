import { createContext } from "react";
import { IAdultContext } from "types/adult";

const AdultContext = createContext<IAdultContext>({} as IAdultContext);

export default AdultContext;
