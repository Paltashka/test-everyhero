import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IHero, IConnections } from '@everyhero/lib-types';
import { Hero } from './hero.model';
@Table({ timestamps: false })
export class Connections extends Model implements IConnections {
    @Column
    'group-affiliation': string;
    @Column
    relatives: string;
    @Column
    alignment: string;
    @ForeignKey(() => Hero)
    @Column
    heroId: string;

    @BelongsTo(() => Hero)
    hero: IHero;
}
