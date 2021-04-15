import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({type: "number", description:"user id", maxLength: 500})
    readonly id: number;

    @ApiProperty({type: "string", description:"name", maxLength: 500})
    readonly name: string;
}