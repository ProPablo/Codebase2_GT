import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem, ICategoryZone, ArtefactStatus } from './Interfaces';
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
  item.AcquisitionDate = new Date(item.AcquisitionDate);
  item.Zone = <ICategoryZone>item.Zone;
  //  const status : ArtefactStatus = item.Status;
  item.Status = <ArtefactStatus>item.Status;
  //  const bob = (item.Status===ArtefactStatus.InStorage) ? "gay" : "homosecual"


  let URI = "data:image/"

  switch (item.ImageFileType) {
    case ".jpeg":
      URI = URI.concat("jpeg;base64," + item.Image);
      break;
    default:
      URI = "https://i.kym-cdn.com/entries/icons/mobile/000/034/800/Get_Stick_Bugged_Banner.jpg";
      break;
  }

  const artefact: IArtefact = {
    URI,
    ...item
  }
  //delete item.ImageFileType
  return artefact;
  // Typecasting
  // return<IArtefact>item;
}