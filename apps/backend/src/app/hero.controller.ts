import { Controller, Get, Query } from '@nestjs/common';

import { ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { HeroDto } from './dtos';
import { HeroService } from './hero.service';

@Controller()
export class HeroController {
    constructor(private readonly heroService: HeroService) {}

    @Get('heros')
    @ApiOperation({
        summary: 'Finds many heros',
        description: 'Yields many heros, optionally paginated.',
    })
    @ApiOkResponse({ type: HeroDto, isArray: true })
    @ApiQuery({
        name: 'take',
        description: 'Number of records to fetch',
        example: 9,
    })
    @ApiQuery({
        name: 'skip',
        description: 'Number of records to skip',
        example: 0,
    })
    @ApiQuery({
        name: 'filter',
        description: 'Number of records to skip',
        example: 'Male',
    })
    async findMany(
        @Query('take') take = 9,
        @Query('skip') skip = 0,
        @Query('filter') filter: 'Male' | 'Female' = null,
    ): Promise<HeroDto[]> {
        return await this.heroService.findMany(take, skip, filter).then((heros) => heros.map(HeroDto.transform));
    }
}
