import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem } from './Interfaces';
import { artefactsURL, eventsURL, storeURL } from './urls';

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

export function processArtefacts(item: IBaseArtefact): IArtefact {
 item.AcquisitionDate =new Date(item.AcquisitionDate);
  // Typecasting
  return <IArtefact>item;
}