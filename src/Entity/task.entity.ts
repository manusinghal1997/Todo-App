import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    taskName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

}