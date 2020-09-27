import { createContext } from "react";
import { IArtefact, IArtefactInfo,IBaseArtefact } from "../../lib/Interfaces";
export interface artefactsContextValue {
    artefacts: IArtefact[];
    artefactInfos: IArtefactInfo[];
    loadArtefacts(): Promise<void>;
}

const ArtefactsContext = createContext<Partial<artefactsContextValue>>({});
ArtefactsContext.displayName = "ArtefactsContext";
export default ArtefactsContext;

