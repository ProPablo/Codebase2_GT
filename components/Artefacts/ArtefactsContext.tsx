import { createContext } from "react";
import { IArtefact, IArtefactInfoImage, IBaseArtefact } from "../../lib/Interfaces";
export interface artefactsContextValue {
    artefacts: IArtefact[];
    loadArtefacts(): Promise<void>;
}

const ArtefactsContext = createContext<Partial<artefactsContextValue>>({});
ArtefactsContext.displayName = "ArtefactsContext";
export default ArtefactsContext;

