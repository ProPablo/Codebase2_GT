import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem, ICategoryZone, ArtefactStatus } from './Interfaces';
import { artefactsURL, eventsURL, storeURL } from './urls';
import testjson from '../test.json';

export async function getArtefacts(): Promise<IArtefact[]> {
  let json;
  try {
    // const result = await fetch(artefactsURL);
    // json = await result.json();
    json = testjson; 
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

// helper function?
export function imageChecker ( ImageFileType: string, Image: string ) {
  let URI = "data:image/"

  switch (ImageFileType) {
    case ".jpeg":
      URI = URI.concat("jpeg;base64," + Image);
      break;
    case ".png":
      URI = URI.concat("png;base64," + Image);
    case ".gif":
      URI = URI.concat("gif;base64," + Image);
    default:
      URI = "https://i.kym-cdn.com/entries/icons/mobile/000/034/800/Get_Stick_Bugged_Banner.jpg";
      break;
  }
  return URI;
} 

export function processArtefacts(item: IBaseArtefact): IArtefact {
  item.AcquisitionDate = new Date(item.AcquisitionDate);
  item.Zone = <ICategoryZone>item.Zone;
  //  const status : ArtefactStatus = item.Status;
  item.Status = <ArtefactStatus>item.Status;
  //  const bob = (item.Status===ArtefactStatus.InStorage) ? "gay" : "homosecual"


  let URI = imageChecker(item.ImageFileType, item.Image);

  const artefact: IArtefact = {
    URI,
    ...item
  }
  //delete item.ImageFileType
  return artefact;
  // Typecasting
  // return<IArtefact>item;
}