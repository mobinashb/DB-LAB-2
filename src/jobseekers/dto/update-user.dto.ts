import { ApiProperty } from '@nestjs/swagger';
import CreateUserDto from './create-user.dto';

export default class UpdateUserDto extends CreateUserDto {
    @ApiProperty({type: "string", description:"user id", maxLength: 500})
    readonly id: string;
}