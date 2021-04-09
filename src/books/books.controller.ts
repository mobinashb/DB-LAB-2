import { Body, Controller, Get, Post} from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from '../dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('post')
  postUser( @Body() user: CreateBookDto) {
    return this.booksService.insert(user);
  }

  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}
