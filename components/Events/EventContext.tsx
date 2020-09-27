import { createContext } from "react";
import { IExhibition } from "../../lib/Interfaces";

const EventContext = createContext<IExhibition[]>([]);
EventContext.displayName = "EventContext";
export default EventContext;

