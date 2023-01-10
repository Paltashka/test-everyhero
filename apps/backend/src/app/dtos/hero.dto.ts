import { IAppearance, IBiography, IConnections, IHero, IImage, IPowerstats, IWork } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';
import { PowerstatsDto } from './powerstats.dto';
import { BiographyDto } from './biography.dto';
import { ApperanceDto } from './appearance.dto';
import { WorkDto } from './work.dto';

import { ConnectionsDto } from './connections.dto';
import { ImageDto } from './image.dto';
import { Hero } from '../models/hero.model';
export class HeroDto implements IHero {
    @ApiProperty({ description: 'Unique Id of the hero', example: '12345' })
    id: string;
    @ApiProperty({ description: 'Name of the hero', example: 'Batman' })
    name: string;
    @ApiProperty({ type: PowerstatsDto })
    powerstats: IPowerstats;
    @ApiProperty({ type: BiographyDto })
    biography: IBiography;
    @ApiProperty({ type: ApperanceDto })
    appearance: IAppearance;
    @ApiProperty({ type: WorkDto })
    work: IWork;
    @ApiProperty({ type: ConnectionsDto })
    connections: IConnections;
    @ApiProperty({ type: ImageDto })
    image: IImage;
    @ApiProperty({
        description: 'Hour rate to book the hero',
        example: 123,
    })
    price: number;

    public static transform(hero: Hero) {
        return Object.fromEntries(
            Object.entries(hero.toJSON<IHero>()).map(([key, attributes]) => {
                if (typeof attributes == 'object') {
                    delete attributes.id;
                    delete attributes.heroId;
                }

                return [key, attributes];
            }),
        ) as IHero;
    }
}
