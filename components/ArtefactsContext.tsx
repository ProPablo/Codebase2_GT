import { createContext } from "react";
import { IBaseArtefact } from "../lib/Interfaces";
const ArtefactsContext = createContext<IBaseArtefact[]>([]);
ArtefactsContext.displayName = "ArtefactsContext";
export { ArtefactsContext };