import { IPowerstats } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class PowerstatsDto implements IPowerstats {
    @ApiProperty({
        description: 'Intelligence (0-100)',
        minimum: 0,
        maximum: 100,
        example: 75,
    })
    intelligence: number;
    @ApiProperty({
        description: 'Strength (0-100)',
        minimum: 0,
        maximum: 100,
        example: 55,
    })
    strength: number;
    @ApiProperty({
        description: 'Speed (0-100)',
        minimum: 0,
        maximum: 100,
        example: 25,
    })
    speed: number;
    @ApiProperty({
        description: 'Durability (0-100)',
        minimum: 0,
        maximum: 100,
        example: 45,
    })
    durability: number;
    @ApiProperty({
        description: 'Overall Power (0-100)',
        minimum: 0,
        maximum: 100,
        example: 15,
    })
    power: number;
    @ApiProperty({
        description: 'Combat Power (0-100)',
        minimum: 0,
        maximum: 100,
        example: 35,
    })
    combat: number;
}
