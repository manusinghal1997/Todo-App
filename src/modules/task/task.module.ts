import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from 'src/services/task/task.service';
import { TasksController } from 'src/controllers/tasks/tasks.controller';
import { Task } from 'src/Entity/task.entity';



@Module({
    imports: [
      TypeOrmModule.forFeature([Task]),
    ],
    providers: [TaskService],
    controllers: [TasksController]
  })

  export class TaskModule {}