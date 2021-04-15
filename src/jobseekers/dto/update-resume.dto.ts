import { ApiProperty } from '@nestjs/swagger';

export default class UpdateResumeDto {
    @ApiProperty({type: "number", description:"resume id", maxLength: 500})
    readonly resumeId: number;
}