import { Module } from '@nestjs/common';
import { ToDoController } from './to-do.controller';
import { ToDoService } from './to-do.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoSchema } from './schema/toDo.schema';
@Module({
  imports: [MongooseModule.forFeature([{name: 'ToDo', schema: ToDoSchema}])],
  controllers: [ToDoController],
  providers: [ToDoService]
})
export class ToDoModule {}
