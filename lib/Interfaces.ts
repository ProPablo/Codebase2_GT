export interface IBaseArtefact {
    Id: number,
    Name: string,
    Description: string, 
    Radius_Of_Effect: number,
    Coord_X: number,
    Coord_Y: number
}

export interface Artefact extends IBaseArtefact {
    
}

//For Reference
async function getArtefact() : Promise<IBaseArtefact>{
    return (await fetch('https://api.kanye.rest')).json();
}