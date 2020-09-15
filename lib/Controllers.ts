import { IArtefact, IBaseArtefact, IBaseStoreItem, IBaseStoreItemImage } from './Interfaces';
import { artefactsURL, storeURL, eventsURL } from './urls';
import { IBaseExhibition } from './Interfaces';

export async function getArtefacts(): Promise<IArtefact[]> {
    let json;
    try {
      const result = await fetch(artefactsURL);
      json = await result.json();

    } catch (error) {
      console.error("ERROR RETREIVING ARTEFACTS");
    }

    return json;
  }

  
export async function getEvents(): Promise<IBaseExhibition[]> {
    let json;
    try {
      const result = await fetch(eventsURL);
      json = await result.json();
      console.log(json);

    } catch (error) {
      console.error("ERROR RETREIVING EVENTS");
    }

    return json;
  }

 
export async function getStore(): Promise<IBaseStoreItem[]> {
    let json;
    try {
      const result = await fetch(storeURL);
      json = await result.json();

    } catch (error) {
      console.error("ERROR RETREIVING STORE ITEMS");
    }

    return json;
  }

