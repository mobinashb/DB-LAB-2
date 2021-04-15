import { ApiProperty } from '@nestjs/swagger';
import CreateSkillDto from './create-skill.dto';

export default class UpdateSkillDto extends CreateSkillDto {
    @ApiProperty({type: "number", description:"skill id", maxLength: 500})
    readonly skillId: number;
}