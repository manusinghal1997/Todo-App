import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './modules/task/task.module';
import { AuthGuardService } from 'src/auth/authguard/authguard.service';

// configuration for sql lite database
@Module({
  imports: [TaskModule,       
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),],
  controllers: [AppController],
  providers: [AppService, AuthGuardService],
})
export class AppModule {}
