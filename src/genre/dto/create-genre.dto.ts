import { ApiProperty } from '@nestjs/swagger';

export default class CreateGenreDto {
    @ApiProperty({type: "string", description:"genre type"})
    readonly type: string;
}