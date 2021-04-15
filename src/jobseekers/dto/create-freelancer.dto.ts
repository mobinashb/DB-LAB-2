import { ApiProperty } from '@nestjs/swagger';
import CreateUserDto from './create-user.dto';

export default class CreateFreelancerDto extends CreateUserDto {
    @ApiProperty({type: "string", description:"bank card number", maxLength: 16})
    readonly cardNum: string;
}