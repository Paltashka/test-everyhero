import { IAppearance } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class ApperanceDto implements IAppearance {
    @ApiProperty({
        description: 'Gender',
        example: 'Male',
    })
    gender: string;
    @ApiProperty({
        description: 'Race',
        example: 'Human',
    })
    race: string;
    @ApiProperty({
        description: 'Height',
        example: '170cm',
    })
    height: string;
    @ApiProperty({
        description: 'Weight',
        example: '86kg',
    })
    weight: string;
    @ApiProperty({
        description: 'Eye Color',
        example: 'Blue',
    })
    'eye-color': string;
    @ApiProperty({
        description: 'Hair Color',
        example: 'Black',
    })
    'hair-color': string;
}
