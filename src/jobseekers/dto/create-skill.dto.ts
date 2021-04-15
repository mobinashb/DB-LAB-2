import { ApiProperty } from '@nestjs/swagger';

export default class CreateSkillDto {
    @ApiProperty({type: "number", description:"skill id", maxLength: 500})
    readonly skillId: number;

    @ApiProperty({type: "number", description:"the resume id associated with the skill"})
    readonly resumeID: number;

    @ApiProperty({type: "number", description:"the freelancer id associated with the skill"})
    readonly freelancerID: number;

    @ApiProperty({type: "string", description:"skill name"})
    readonly name: string;

    @ApiProperty({type: "number", description:"skill level"})
    readonly level: number;
}