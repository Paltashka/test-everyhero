import { IWork } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class WorkDto implements IWork {
    @ApiProperty({ description: 'Occupation', example: 'Journalist' })
    occupation: string;
    @ApiProperty({
        description: 'Base',
        example: 'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    })
    base: string;
}
