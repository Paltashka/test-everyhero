import { Module } from '@nestjs/common';

import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hero } from './models/hero.model';
import { Appearance } from './models/appearance.model';
import { Biography } from './models/biography.model';
import { Connections } from './models/connections.model';
import { Image } from './models/image.model';
import { Powerstats } from './models/powerstats.model';
import { Work } from './models/work.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Hero]),
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: 'db/database.sqlite',
            logging: false,
            models: [Appearance, Biography, Connections, Hero, Image, Powerstats, Work],
            synchronize: true,
        }),
    ],
    controllers: [HeroController],
    providers: [HeroService],
})
export class AppModule {}
