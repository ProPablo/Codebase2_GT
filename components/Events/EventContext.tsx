import { createContext } from "react";
import { IBaseExhibition } from "../../lib/Interfaces";
export interface eventContextValue {
    events: IBaseExhibition[];
}

const EventContext = createContext<Partial<eventContextValue>>({});
EventContext.displayName = "EventContext";
export default EventContext;

