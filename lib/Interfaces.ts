export enum ArtefactStatus {
    OnDisplay = 0,
    InStorage,
    InTransit,
    Restoration
}


export interface IBaseArtefact {
    Id: number,
    Name: string,
    Description: string,
    Image: string,
    ImageFileType: string,
    Radius_Of_Effect: number,
    AdditionalComments: string | null,
    AcquisitionDate: Date | string,
    Coord_X: number,
    Coord_Y: number,
    Activation: boolean,
    ArtefactStatus: ArtefactStatus,
    Zone: IZone | null,
    ArtefactCategory: ICategory | null,
    ArtefactInfos: IArtefactInfoSimple[]
}

// export interface IArtefact extends IBaseArtefact {
//     URI: string

//     //https://stackoverflow.com/questions/51804810/how-to-remove-fields-from-a-typescript-interface-via-extension/51804844
//     //delete ImagefileType
// }
//Abstract type conversion into generic
export type IArtefact = Omit<IBaseArtefact, "Image"| "ImageFileType"> & {URI: string}

export interface IArtefactSimple {
    Id: number,
    Name: string,
}


export interface IArtefactInfo {
    Id: number,
    Description: string,
    File: string,
    FileExtension: string,
    ArtefactInfoType: number, // 0, 1, 2, 3 (Text, Image, Video, Audio)
    Content: string,
    Artefact: IArtefactSimple,
    Data?: string
}

export interface IArtefactInfoSimple {
    Id: number, 
    Description: string
}

export interface IBaseExhibition {
    Id: number,
    Name: string,
    Description: string,
    StartDate: Date | string,
    FinishDate: Date | string,
    Organiser: string,
    Price_Adult: number,
    Price_Child: number,
    Image: string,
    ImageFileType: string
}

export interface IExhibition extends IBaseExhibition {
    URI: string
}

export interface IBaseStoreItem {
    Id: number,
    Name: string,
    Description: string,
    Cost: number,
    InStock: boolean,
    StoreItemImages: IBaseStoreItemImage[]
}

export interface IBaseStoreItemImage {
    Id: number,
    Image: string,
    ImageFileType: string,
    StoreItem: IBaseStoreItem
}

export interface IStoreItemImage extends IBaseStoreItemImage {
    URI: string
}

export interface IBaseTour {
    Id: number,
    Name: string,
    Description: string,
    AgeGroup: number,
    Artefacts: IBaseArtefact[]
}

export interface IZone {
    Id: number,
    Name: string
}
export interface ICategory {
    Id: number,
    Name: string
}

// //For Reference
// async function getArtefact() : Promise<IBaseArtefact>{
//     return (await fetch('https://api.kanye.rest')).json();
// }

// const resJson : IBaseExhibition = await res.json();
// consume(new Date(resJson.StartDate))
// const finalExhibition = processExhibition(resJson);

// consooooomer(finalExhibition);

// function processExhibition(input: IBaseExhibition) : IExhibition {
//     return {...input, StartDate: new Date(input.StartDate)};
// }