import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/entity/user.entity';
import { JobseekersModule } from './jobseekers/jobseekers.module';
import EmployerEntity from './db/entity/employer.entity';
import FreelancerEntity from './db/entity/freelancer.entity';
import OrderEntity from './db/entity/order.entity';
import SkillEntity from './db/entity/skill.entity';

@Module({
  imports: [
    JobseekersModule,
    TypeOrmModule.forFeature(
    [UserEntity, EmployerEntity, FreelancerEntity, OrderEntity, SkillEntity],
  ),

  TypeOrmModule.forRoot(),

  ],
  controllers: [AppController],
  providers: [
    AppService,],
})
export class AppModule {}
