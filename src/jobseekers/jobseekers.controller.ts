import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOrderDto from './dto/create-order.dto';
import CreateSkillDto from './dto/create-skill.dto';
import UpdateUserDto from './dto/update-user.dto';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
  constructor(private readonly jobseekersService: JobseekersService) {}

  @ApiResponse({ status: 200, description: "creats a new employer" })
  @Post('employers')
  postEmployer( @Body() emp: CreateEmployerDto) {
    return this.jobseekersService.insertEmployer(emp);
  }

  @ApiResponse({ status: 200, description: "updates an existing employer" })
  @Put('employers')
  putEmployer( @Body() emp: UpdateUserDto) {
    return this.jobseekersService.updateEmployer(emp);
  }

  @ApiResponse({ status: 200, description: "creates a new freelancer" })
  @Post('freelancers')
  postFreelancer( @Body() frl: CreateFreelancerDto) {
    return this.jobseekersService.insertFreelancer(frl);
  }

  @ApiResponse({ status: 200, description: "creates a new order associated with the employer having 'employerId'" })
  @Post('employers/orders')
  postOrder( @Body() order: CreateOrderDto, @Param() employerId: number) {
    return this.jobseekersService.insertOrder(order);
  }

  @ApiResponse({ status: 200, description: "creates a new skill associated with the freelancer having 'freelancerId'" })
  @Post('freelancers/skills')
  postSkill( @Body() skill: CreateSkillDto, @Param() freelancerId: number) {
    return this.jobseekersService.insertSkill(skill);
  }
}
