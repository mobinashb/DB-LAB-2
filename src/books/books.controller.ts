import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import { BooksServices } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';


@Controller('books')
export class BooksController {
    constructor(private readonly booksServices: BooksServices) {}

    @ApiResponse({ status: 200, description: "handles creation of new books" })
    @Post('post')
    postBook( @Body() book: CreateBookDto) {
        return this.booksServices.insert(book);
    }

    @ApiResponse({ status: 200, description: "returns a list of existing books in the database" })
    @Get()
    getAll() {
        return this.booksServices.getAllBooks();
    }

    @ApiResponse({ status: 200, description: "updates attributes of an existing book" })
    @Put('update')
    updateBook( @Body() bookDetails: UpdateBookDto) {
        return this.booksServices.update(bookDetails);
    }

    @ApiResponse({ status: 200, description: "deletes the book having 'bookId'" })
    @Delete('delete')
    deleteBook( @Param() bookId: number) {
        return this.booksServices.delete(bookId);
    }
}
