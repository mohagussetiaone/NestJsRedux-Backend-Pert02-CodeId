import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
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
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { LocalGuard } from 'src/auth/local/local.guard';
import { RegionController } from 'src/region/region.controller';
import { RegionService } from 'src/region/region.service';
import { UploadMiddleware } from 'src/upload/upload.middleware';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';

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
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
    MulterModule.register(UploadMiddleware.MulterOption()),
  ],
  providers: [RegionService, UserService, LocalGuard, JwtGuard],
  controllers: [RegionController, UserController],
  exports: [UserService],
})
export class ModuleModule {}
