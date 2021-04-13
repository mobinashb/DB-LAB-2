import { ApiProperty } from '@nestjs/swagger';
import CreateBookDto from './create-book.dto';

export default class UpdateBookDto extends CreateBookDto {
  @ApiProperty({type: "number", description:"book id", maxLength: 500})
  readonly id: number;
}