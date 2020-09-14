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

export interface IBaseArtefact {
    Id: number,
    Name: string,
    Description: string, 
    Image: string,
    Radius_Of_Effect: number,
    AdditionalComments: string,
    AcquisitionDate: Date,
    Coord_X: number,
    Coord_Y: number,
    Activation: boolean,
    Status: ArtefactStatus,
    Zone: IBaseCategoryZone,
    Category: IBaseCategoryZone
}

export interface IBaseExhibition {
    Id: number,
    Name: string,
    Description: string,
    StartDate: Date,
    FinishDate: Date,
    Organiser: string,
    Price_Adult: number,
    Price_Child: number,
    Image: string
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

//For Reference
async function getArtefact() : Promise<IBaseArtefact>{
    return (await fetch('https://api.kanye.rest')).json();
}