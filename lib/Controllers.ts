import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem,  ArtefactStatus, IExhibition, IBaseStoreItemImage, IStoreItemImage, IArtefactInfo } from './Interfaces';
import { artefactsURL, eventsURL, storeURL } from './urls';
import testjson from '../test.json';

export async function getArtefacts(): Promise<IBaseArtefact[]> {
  let json;
  try {
    // const result = await fetch(artefactsURL);
    // json = await result.json();
    json = testjson;
    return json;
  } catch (error) {
    console.error("ERROR RETREIVING ARTEFACTS");
  }
  return [];
}


export async function getEvents(): Promise<IExhibition[]> {
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
export function bease64Converter(FileType: string, Data: string) {
  let URI = ""

  switch (FileType) {
    case ".jpeg":
      URI = URI.concat("data:image/jpeg;base64," + Data);
      break;
    case ".jpg":
      URI = URI.concat("data:image/jpeg;base64," + Data);
      break;
    case ".png":
      URI = URI.concat("data:image/png;base64," + Data);
      break;
    case ".gif":
      URI = URI.concat("data:image/gif;base64," + Data);
      break;
    case ".txt":
      URI = Buffer.from(Data, 'base64').toString('ascii');
    default:
      URI = "https://i.kym-cdn.com/entries/icons/mobile/000/034/800/Get_Stick_Bugged_Banner.jpg";
      break;
  }
  return URI;
}


export function processArtefactInfo(item: IArtefactInfo){
  let Data = bease64Converter(item.FileExtension, item.File);
  const artefactInfoFile = {
    Data,
    ...item
  }
  return artefactInfoFile;
}

// function processInterface<T>() {
//   return {...item, URL};
// }

export function processArtefact(item: IBaseArtefact): IArtefact {
  item.AcquisitionDate = new Date(item.AcquisitionDate);
  const {Image, ImageFileType, ...clean} = item;
  let URI = bease64Converter(ImageFileType, Image);
  
  const artefact: IArtefact = {
    URI,
    ...clean,
  }
  return artefact;
}

export function processEvent(item: IBaseExhibition): IExhibition {
  item.StartDate = new Date(item.StartDate);
  item.FinishDate = new Date(item.FinishDate);
  let URI = bease64Converter(item.ImageFileType, item.Image);

  const event: IExhibition = {
    URI,
    ...item
  }
  return event;
}



export function processStoreItemImage(item: IBaseStoreItemImage): IStoreItemImage {
  let URI = bease64Converter(item.ImageFileType, item.Image);

  const storeItemImage: IStoreItemImage = {
    URI,
    ...item
  }

  return storeItemImage;
}