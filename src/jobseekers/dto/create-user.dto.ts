import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({type: "string", description:"user id", maxLength: 500})
    readonly id: string;

    @ApiProperty({type: "string", description:"name", maxLength: 500})
    readonly name: string;

    @ApiProperty({type: "string", description:"username", maxLength: 500})
    readonly username: string;

    @ApiProperty({type: "string", description:"password", maxLength: 500})
    readonly password: string;
}