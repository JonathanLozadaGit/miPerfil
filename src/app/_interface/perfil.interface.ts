export interface Perfil {
    name?: string;
    shortPresentation?: string;
    imageProfile1?: string;
    imageProfile2?: string;
    greeting?: string;
    yo_soy? : string
    knowledges?: Knowledges;
}

export interface Knowledges {
    title?: string;
    fields?: Field []

}

export interface Field {
    name: string;
    items: Item []
}
export interface Item {
    image?: string;
    title?: string
}
