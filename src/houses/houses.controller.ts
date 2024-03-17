import { 
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,

} from '@nestjs/common';
import { HousesService } from './houses.service';
import {House} from './houses.entity';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HousesController {
 constructor(private readonly housesService: HousesService){}

 @Post()
 @HttpCode(201)
 async create (@Body() createHouseDProto:CreateHouseDto):
 Promise<House>{
   return this.housesService.create(createHouseDProto);

 }


@Get()
async findAll(): Promise<House[]>{
    return this.housesService.findAll();
   
}

@Get(':id')
async findOne(@Param('id') id:string):Promise<House>{
   return this.housesService.findOne(id);

}


@Put(':_id')
async update(
   @Param('_id') id:string,
   @Body() updateHouse: CreateHouseDto,
):Promise<House>{
    return this.housesService.update(id, updateHouse);

}

@Delete(':_id')
async delete(@Param('_id') code: string): Promise<boolean> {

    return this.housesService.delete(code);

}

}
