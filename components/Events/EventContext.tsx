import { createContext } from "react";
import { IBaseExhibition } from "../../lib/Interfaces";

const EventContext = createContext<IBaseExhibition[]>([]);
EventContext.displayName = "EventContext";
export default EventContext;

