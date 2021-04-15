import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Public } from './public-decorator';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard("local"))
  @ApiResponse({ status: 200, description: "authorizes user with username and password" })
  @Post('auth/login')
  async login(@Request() req) {
      return this.authService.login(req.user);
  }
}
