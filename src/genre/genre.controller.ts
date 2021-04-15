import { Body, Controller, Get, Post } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import {ApiBearerAuth} from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
    constructor(private readonly genreServices: GenreServices) {}

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "handles creation of new genres" })
    @Post('post')
    postGenre( @Body() genre: CreateGenreDto) {
        return this.genreServices.insert(genre);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "returns a list of existing genres in the database" })
    @Get()
    getAll() {
        return this.genreServices.getAllGenre();
    }
}