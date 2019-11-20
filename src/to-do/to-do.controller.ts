import { Controller, Post, Body } from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dtos/create-toDo.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    this.toDoService.create(createToDoDto);
  }
}
