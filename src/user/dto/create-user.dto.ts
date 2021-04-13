import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({type: "string", description:"user name", maxLength: 500})
    readonly name: string;

    @ApiProperty({type: "array", items: {type: "number"}, description:"the book ids associated with the user"})
    readonly books: number[] ;
}