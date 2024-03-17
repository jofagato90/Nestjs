import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './house.schema';



@Module({
  imports:[MongooseModule.forFeature([{name: 'House', schema: HouseSchema}])],
  controllers: [HousesController],
  providers:[HousesService],
  
})
export class HousesModule {}
