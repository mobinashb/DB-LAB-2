import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserDto {
    @ApiProperty({type: "string", description:"user id", maxLength: 500})
    readonly id: string;
}