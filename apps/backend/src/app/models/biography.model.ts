import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IHero, IBiography } from '@everyhero/lib-types';
import { Hero } from './hero.model';
@Table({ timestamps: false })
export class Biography extends Model implements IBiography {
    @Column
    'full-name': string;
    @Column
    'alter-egos': string;
    @Column
    aliases: string;
    @Column
    'place-of-birth': string;
    @Column
    'first-appearance': string;
    @Column
    publisher: string;
    @Column
    alignment: string;
    @ForeignKey(() => Hero)
    @Column
    heroId: string;

    @BelongsTo(() => Hero)
    hero: IHero;
}
