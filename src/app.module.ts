import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesService } from './houses/houses.service';
import { UsersModule } from './users/users.module';
import { HousesController } from './houses/houses.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController, HousesController],
  providers: [AppService, HousesService],
})
export class AppModule {}
