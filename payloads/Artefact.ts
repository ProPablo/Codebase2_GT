export interface BaseArtefact {
    quote: string
}
//For Reference
export async function getArtefact() : Promise<BaseArtefact>{
    return (await fetch('https://api.kanye.rest')).json();
}

export interface Artefact extends BaseArtefact {

}