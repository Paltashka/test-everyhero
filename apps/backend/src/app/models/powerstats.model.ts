import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IHero, IPowerstats } from '@everyhero/lib-types';
import { Hero } from './hero.model';
@Table({ timestamps: false })
export class Powerstats extends Model implements IPowerstats {
    @Column
    intelligence: number;
    @Column
    strength: number;
    @Column
    speed: number;
    @Column
    durability: number;
    @Column
    power: number;
    @Column
    combat: number;

    @ForeignKey(() => Hero)
    @Column
    heroId: string;

    @BelongsTo(() => Hero)
    hero: IHero;
}
