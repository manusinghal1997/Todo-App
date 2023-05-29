import { Injectable } from '@nestjs/common';
import { Task } from 'src/Entity/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) { }

    async  findAll(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async  create(contact: Task): Promise<Task> {
        return await this.taskRepository.save(contact);
    }

    async update(contact: Task): Promise<UpdateResult> {
        return await this.taskRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.taskRepository.delete(id);
    }

}
