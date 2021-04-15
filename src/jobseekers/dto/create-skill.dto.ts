import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"the freelancer id associated with the skill"})
    readonly freelancerId: number;

    @ApiProperty({type: "string", description:"skill name"})
    readonly name: string;

    @ApiProperty({type: "number", description:"skill level"})
    readonly level: number;
}