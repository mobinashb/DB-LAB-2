import { ApiPropertyOptional } from '@nestjs/swagger';
import CreateUserDto from './create-user.dto';

export default class CreateEmployerDto extends CreateUserDto {
    @ApiPropertyOptional({type: "string", description:"organization name", maxLength: 500})
    readonly organization: string;
}