import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException,

} from '@nestjs/common';
import { House } from './houses.entity';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { CreateHouseDto } from './dto/create-house.dto';



@Injectable()
export class HousesService {
    constructor(@InjectModel('House') private readonly houseModel:
        Model<House>) { }

    async create(CreateHouseDto: CreateHouseDto): Promise<House> {
        const newHouse = new this.houseModel({
            ...CreateHouseDto,

        })

        return newHouse.save();

    }
    
    async findAll():Promise<House[]>{
      return this.houseModel.find();

    }


    async findOne(id: string):Promise<House>{
      try {
        return await this.houseModel.findById(id);
      } catch (error) {
        throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
      } 
    }


     async update(_id: string, houseDto:CreateHouseDto):
     Promise<House>{
     try {
        return await this.houseModel.findByIdAndUpdate(_id,houseDto, {new: true});
     } catch (error) {
        throw new NotFoundException('House not found')
       }

     }

     async delete(_id: string):Promise<boolean> {
      try {
        const house = await this.houseModel.findByIdAndDelete(_id);
        if (!house){
            throw new NotFoundException('House not found');
        }
        return true;
      } catch (error) {
        throw new NotFoundException('House not found');
        }

     }
  

    async findBycode(code: string):Promise<House>{
    return await this.houseModel.findOne({code});
          
    }



}
