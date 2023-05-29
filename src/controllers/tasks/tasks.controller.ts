import { Get, Controller, UseGuards } from '@nestjs/common';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { Task } from 'src/Entity/task.entity';
import { AuthGuardService } from 'src/auth/authguard/authguard.service';
import { TaskService } from 'src/services/task/task.service';

@Controller('task')
export class TasksController {
    constructor(private taskService: TaskService){}

    // get the list all the tasks
    @UseGuards(AuthGuardService)
    @Get()
    index(): Promise<Task[]> {
      return this.taskService.findAll();
    } 

    // create new task by using post request
    @Post('create')
    @UseGuards(AuthGuardService)
    async create(@Body() taskData: Task): Promise<any> {
      console.log("task data  = ", taskData);
      return this.taskService.create(taskData);
    }  

    // update the existing task
    @Put(':id/update')
    @UseGuards(AuthGuardService)
    async update(@Param('id') id, @Body() taskData: Task): Promise<any> {
        taskData.id = Number(id);
        console.log('Update #' + taskData.id)
        return this.taskService.update(taskData);
    }  

// delete the task
    @Delete(':id/delete')
    @UseGuards(AuthGuardService)
    async delete(@Param('id') id): Promise<any> {
      return this.taskService.delete(id);
    }   
    
}
