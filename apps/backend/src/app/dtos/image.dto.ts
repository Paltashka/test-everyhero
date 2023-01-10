import { IImage } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class ImageDto implements IImage {
    @ApiProperty({
        description: 'URL',
        example: 'https://www.superherodb.com/pictures2/portraits/10/100/113.jpg',
    })
    url: string;
}
