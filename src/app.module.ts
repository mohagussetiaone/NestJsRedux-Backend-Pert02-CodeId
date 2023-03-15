import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { ServiceService } from './service/service.service';
import { ModuleModule } from './module/module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'HR',
      entities: ['dist/output/entities/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModuleModule,
  ],
})
export class AppModule {}
