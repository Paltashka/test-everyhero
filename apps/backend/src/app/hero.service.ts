import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Appearance, Biography, Connections, Hero, Image, Powerstats, Work } from './models';

@Injectable()
export class HeroService {
    constructor(
        @InjectModel(Hero)
        private heroModel: typeof Hero,
    ) {}

    async findMany(take: number, skip: number, filter: string): Promise<Hero[]> {
        return this.heroModel.findAll({
            include: [Biography, Appearance, Connections, Image, Powerstats, Work],
            limit: take,
            offset: skip,
            ...(filter && {
                where: {
                    '$appearance.gender$': filter,
                },
            }),
        });
    }
}
