import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { Public } from './public-decorator';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
}
