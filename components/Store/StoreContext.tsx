import { createContext } from "react";
import { IBaseStoreItem, IBaseStoreItemImage } from "../../lib/Interfaces";
export interface storeContextValue {
    storeItems: IBaseStoreItem[];
    storeImages: IBaseStoreItemImage[];
}

const StoreContext = createContext<Partial<storeContextValue>>({});
StoreContext.displayName = "StoreContext";
export default StoreContext;

