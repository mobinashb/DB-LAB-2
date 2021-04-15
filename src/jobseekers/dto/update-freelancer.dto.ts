import { ApiProperty } from '@nestjs/swagger';
import CreateFreelancerDto from './create-freelancer.dto';

export default class UpdateFreelancerDto extends CreateFreelancerDto {
    @ApiProperty({type: "string", description:"freelancer id", maxLength: 500})
    readonly id: string;
}