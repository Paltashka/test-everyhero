import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IHero, IAppearance } from '@everyhero/lib-types';
import { Hero } from './hero.model';
@Table({ timestamps: false })
export class Appearance extends Model implements IAppearance {
    @Column
    gender: string;
    @Column
    race: string;
    @Column
    height: string;
    @Column
    weight: string;

    @Column
    'eye-color': string;

    @Column
    'hair-color': string;
    @ForeignKey(() => Hero)
    @Column
    heroId: string;

    @BelongsTo(() => Hero)
    hero: IHero;
}
