import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"skill id", maxLength: 500})
    readonly skillId: number;

    @ApiProperty({type: "string", description:"skill name"})
    readonly name: string;

    @ApiProperty({type: "number", description:"skill level"})
    readonly level: number;
}