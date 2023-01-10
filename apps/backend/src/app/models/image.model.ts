import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IHero, IImage } from '@everyhero/lib-types';
import { Hero } from './hero.model';
@Table({ timestamps: false })
export class Image extends Model implements IImage {
    @Column
    url: string;
    @ForeignKey(() => Hero)
    @Column
    heroId: string;

    @BelongsTo(() => Hero)
    hero: IHero;
}
