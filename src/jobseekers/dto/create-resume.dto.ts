import { ApiProperty } from '@nestjs/swagger';

export default class CreateResumeDto {
    @ApiProperty({type: "number", description:"resume id", maxLength: 500})
    readonly resumeId: number;

    @ApiProperty({type: "number", description:"the freelancer id associated with the resume"})
    readonly freelancerID: number;

    @ApiProperty({type: "string", description:"resume description"})
    readonly description: string;
}