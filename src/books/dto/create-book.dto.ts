import { ApiProperty } from '@nestjs/swagger';

export default class CreateBookDto {
    @ApiProperty({type: "string", description:"book name", maxLength: 500})
    readonly name: string;

    @ApiProperty({type: "number", description:"the user id associated with the book"})
    readonly userID: number;

    @ApiProperty({type: "array", items:{type: "number"}, description:"the genre ids associated with the book"})
    readonly genreIDs: number[];
}