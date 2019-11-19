import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:170096@cluster0-ulutz.mongodb.net/mixin?retryWrites=true&w=majority'), ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
