import { ApiProperty } from '@nestjs/swagger';
import { Max, Min } from 'class-validator';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"the freelancer id associated with the skill"})
    readonly freelancerId: number;

    @ApiProperty({type: "string", description:"skill name"})
    readonly name: string;

    @Min(1)
    @Max(10)
    @ApiProperty({type: "number", description:"skill level"})
    readonly level: number;
}