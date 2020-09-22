import { IArtefact, IBaseArtefact, IBaseExhibition, IBaseStoreItem, ICategoryZone, ArtefactStatus, IExhibition, IBaseStoreItemImage, IStoreItemImage, IArtefactInfo, IArtefactInfoFile } from './Interfaces';
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
export function imageChecker(ImageFileType: string, Image: string) {
  let URI = "data:image/"

  switch (ImageFileType) {
    case ".jpeg":
      URI = URI.concat("jpeg;base64," + Image);
      break;
    case ".jpg":
      URI = URI.concat("jpeg;base64," + Image);
      break;
    case ".png":
      URI = URI.concat("png;base64," + Image);
      break;
    case ".gif":
      URI = URI.concat("gif;base64," + Image);
      break;
    default:
      URI = "https://i.kym-cdn.com/entries/icons/mobile/000/034/800/Get_Stick_Bugged_Banner.jpg";
      break;
  }
  return URI;
}

export function processArtefactInfo(item: IArtefactInfo): IArtefactInfoFile {
  let URI = "";
  
  if (item.ArtefactInfoType !== 0) {
    URI = imageChecker(item.FileExtension, item.File);
  }
  
  const artefactInfoFile: IArtefactInfoFile = {
    URI,
    ...item
  }

  return artefactInfoFile;
}

export function processArtefact(item: IBaseArtefact): IArtefact {
  item.AcquisitionDate = new Date(item.AcquisitionDate);
  item.Zone = <ICategoryZone>item.Zone;
  item.ArtefactStatus = <ArtefactStatus>item.ArtefactStatus;

  let URI = imageChecker(item.ImageFileType, item.Image);
  let artInfos = new Array();
  item.ArtefactInfos.forEach(info => {
    artInfos.push(processArtefactInfo(info));
  });

  const artefact: IArtefact = {
    URI,
    Infos: artInfos,
    Status: item.ArtefactStatus,
    ...item,
  }
  return artefact;
}

export function processEvent(item: IBaseExhibition): IExhibition {
  item.StartDate = new Date(item.StartDate);
  item.FinishDate = new Date(item.FinishDate);
  let URI = imageChecker(item.ImageFileType, item.Image);

  const event: IExhibition = {
    URI,
    ...item
  }

  return event;
}



export function processStoreItemImage(item: IBaseStoreItemImage): IStoreItemImage {
  let URI = imageChecker(item.ImageFileType, item.Image);

  const storeItemImage: IStoreItemImage = {
    URI,
    ...item
  }

  return storeItemImage;
}