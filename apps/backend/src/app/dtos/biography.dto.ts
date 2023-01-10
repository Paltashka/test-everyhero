import { IBiography } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class BiographyDto implements IBiography {
    @ApiProperty({
        description: 'Full name',
        example: 'Bruce Wayne',
    })
    'full-name': string;
    @ApiProperty({
        description: 'Alter egos',
        example: 'No alter egos found.',
    })
    'alter-egos': string;
    @ApiProperty({
        description: 'Place of Birth',
        example: 'Crest Hill, Bristol Township; Gotham County',
    })
    'place-of-birth': string;
    @ApiProperty({
        description: 'First Apperance',
        example: 'Detective Comics #27',
    })
    'first-appearance': string;
    @ApiProperty({
        description: 'First Apperance',
        example: 'DC Comics',
    })
    publisher: string;
    @ApiProperty({
        description: 'Alignment',
        example: 'good',
    })
    alignment: string;
}
