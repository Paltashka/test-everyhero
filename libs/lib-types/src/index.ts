export interface IPowerstats {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

export interface IBiography {
    'full-name': string;
    'alter-egos': string;
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: string;
}

export interface IAppearance {
    gender: string;
    race: string;
    height: string;
    weight: string;
    'eye-color': string;
    'hair-color': string;
}

export interface IWork {
    occupation: string;
    base: string;
}

export interface IConnections {
    'group-affiliation': string;
    relatives: string;
}

export interface IImage {
    url: string;
}

export interface IHero {
    id: string;
    name: string;
    powerstats: IPowerstats;
    biography: IBiography;
    appearance: IAppearance;
    work: IWork;
    connections: IConnections;
    image: IImage;
    price: number;
}
