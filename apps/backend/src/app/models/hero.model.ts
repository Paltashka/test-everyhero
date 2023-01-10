import { Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IAppearance, IBiography, IConnections, IHero, IImage, IPowerstats, IWork } from '@everyhero/lib-types';
import { Powerstats } from './powerstats.model';
import { Appearance } from './appearance.model';
import { Biography } from './biography.model';
import { Work } from './work.model';
import { Connections } from './connections.model';
import { Image } from './image.model';

@Table({ timestamps: false })
export class Hero extends Model implements IHero {
    @PrimaryKey
    @Column
    id: string;
    @Column
    name: string;

    @HasOne(() => Powerstats, { onDelete: 'cascade', hooks: true })
    powerstats: IPowerstats;

    @HasOne(() => Biography, { onDelete: 'cascade', hooks: true })
    biography: IBiography;
    @HasOne(() => Appearance, { onDelete: 'cascade', hooks: true })
    appearance: IAppearance;
    @HasOne(() => Work, { onDelete: 'cascade', hooks: true })
    work: IWork;
    @HasOne(() => Connections, { onDelete: 'cascade', hooks: true })
    connections: IConnections;
    @HasOne(() => Image, { onDelete: 'cascade', hooks: true })
    image: IImage;
    @Column
    price: number;
}
