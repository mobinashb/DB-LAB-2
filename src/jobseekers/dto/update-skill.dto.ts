import { ApiProperty } from '@nestjs/swagger';

export default class UpdateSkillDto {
    @ApiProperty({type: "number", description:"skill id", maxLength: 500})
    readonly skillId: number;
}