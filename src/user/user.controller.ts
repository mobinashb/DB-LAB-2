import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import {ApiResponse} from '@nestjs/swagger';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly usersServices: UserServices) {}

    @ApiResponse({ status: 200, description: "handles creation of new users" })
    @Post('post')
    postUser( @Body() user: CreateUserDto) {
        return this.usersServices.insert(user);
    }

    @ApiResponse({ status: 200, description: "returns a list of existing users in the database" })
    @Get()
    getAll() {
        return this.usersServices.getAllUsers();
    }

    @ApiResponse({ status: 200, description: "returns a list of the books associated with the user having 'userID'" })
    @Get('books')
    getBooks( @Body('userID', ParseIntPipe) userID: number ) {
        return this.usersServices.getBooksOfUser(userID);
    }
}