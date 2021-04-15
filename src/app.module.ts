import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import BooksModule from './books/books.module';
import GenreModule from './genre/genre.module';
import UserModule from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import UserEntity from './db/entity/user.entity';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JobseekersModule } from './jobseekers/jobseekers.module';

@Module({
  imports: [HelloModule, UserModule, BooksModule, GenreModule,
    TypeOrmModule.forFeature(
    [UserEntity, BookEntity , GenreEntity],
  ),

  TypeOrmModule.forRoot(),

  AuthModule,

  JobseekersModule,],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
  }],
})
export class AppModule {}
