import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from 'output/entities/Countries';
import { Departments } from 'output/entities/Departments';
import { Employees } from 'output/entities/Employees';
import { JobHistory } from 'output/entities/JobHistory';
import { Jobs } from 'output/entities/Jobs';
import { Locations } from 'output/entities/Locations';
import { Regions } from 'output/entities/Regions';
import { Regions1 } from 'output/entities/Regions1';
import { User } from 'output/entities/User';
import { ControllerController } from 'src/controller/controller.controller';
import { ServiceService } from 'src/service/service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Regions,
      Countries,
      Locations,
      Departments,
      Employees,
      JobHistory,
      Jobs,
      Regions1,
      User,
    ]),
  ],
  providers: [ServiceService],
  controllers: [ControllerController],
})
export class ModuleModule {}
