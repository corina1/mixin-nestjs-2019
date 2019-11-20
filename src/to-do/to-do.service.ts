import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './interfaces/toDo';
import { Model } from 'mongoose';
import { CreateToDoDto } from './dtos/create-toDo.dto';
@Injectable()
export class ToDoService {
    constructor(@InjectModel('ToDo') private readonly toDoModel: Model<ToDo>) {}

    async create(createToDoDto: CreateToDoDto): Promise<string> {
        const createDtoModel = this.toDoModel(createToDoDto);
        const result = await createDtoModel.save();
        return result.id;
    }
}
