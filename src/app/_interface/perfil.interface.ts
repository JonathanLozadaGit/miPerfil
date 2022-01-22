export interface Perfil {
    idioma?: string;
    code?: string;
    name?: string;
    shortPresentation?: string;
    imageProfile1?: string;
    imageProfile2?: string;
    greeting?: string;
    yo_soy? : string;
    sections? : string [];
    aboutMe? : AboutMe;
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



export interface AboutMe {
    title?: string;
    icon?: string;
    text?: string;
    sections?: Section[]
}

export interface Section {
    sectionTitle?: string;
    items?: Item2 []
}

export interface Item2 {
    title?: string;
    image?: string;
    list?: string[];
    highlights?: string[];
}