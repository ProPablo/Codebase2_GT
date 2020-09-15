import { backendURL } from "../env.js";

export const baseURL = (process.env.NODE_ENV==="production") ? "api.kongroo.xyz" : backendURL;
export const artefactsURL = baseURL + "/api/artefact?pageNumber=0&numPerPage=999999&isDeleted=false";
export const eventsURL = baseURL + "/api/artefact?pageNumber=0&numPerPage=999999&isDeleted=false";