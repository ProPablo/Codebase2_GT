enum ArtefactStatus {
    OnDisplay = 0,
    InStorage,
    InTransit, 
    Restoration
}

export interface IBaseCategoryZone {
    Id: number,
    Name: string
}

export interface IBaseArtefactInfo {
    Id: number, 
    Description: string,
    File: string,
    FileExtension: string,
    ArtefactInfoType: number, // 0, 1, 2, 3 (Text, Image, Video, Audio)
    Content: string,
    Artefact: IBaseArtefact
}

export interface IBaseArtefact {
    Id: number,
    Name: string,
    Description: string, 
    Image: string,
    ImageFileType: string,
    Radius_Of_Effect: number,
    AdditionalComments: string,
    AcquisitionDate: Date | string,
    Coord_X: number,
    Coord_Y: number,
    Activation: boolean,
    Status: ArtefactStatus | any,
    Zone: IBaseCategoryZone | any,
    Category: IBaseCategoryZone | any
}
// [
//     {
//       "Id": 2,
//       "Name": "Dynamax Pikachu",
//       "Description": "How did we fit this inside the Museum",
//       "ImageFileType": ".jpg",
//       "AdditionalComments": null,
//       "AcquisitionDate": "2020-09-14T07:56:45.443",
//       "Radius_Of_Effect": 200,
//       "Coord_X": 10,
//       "Coord_Y": 10,
//       "Activation": true,
//       "ArtefactStatus": 0,
//       "Zone": {
//         "Id": 1,
//         "Name": "calZONE"
//       },
//       "ArtefactCategory": {
//         "Id": 1,
//         "Name": "sCATEGORY"
//       },
//       "ArtefactInfos": [],
//       "CreatedDate": "2020-09-14T07:56:45.443",
//       "ModifiedDate": "2020-09-14T09:21:43.86",
//       "IsDeleted": false
//     }
//   ]

export interface IArtefact extends IBaseArtefact {
    // Zone : IBaseCategoryZone | null
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
    StartDate : Date
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
    FileType: string,
    StoreItem: IBaseStoreItem
}

export interface IBaseTour {
    Id: number,
    Name: string,
    Description: string,
    AgeGroup: number,
    Artefacts: IBaseArtefact[]
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