import {
    IsNotEmpty,
    IsNumber,
    IsString,
    
} from 'class-Validator';
 

export class CreateHouseDto{
  @IsNotEmpty()
  @IsString()
  readonly _id: string
  @IsNotEmpty()
  @IsString()
  readonly address: string;
  @IsNotEmpty()
  @IsString()
  readonly city: string;
  @IsNotEmpty()
  @IsString()
  readonly state: string;
  @IsNotEmpty()
  @IsString()
  readonly size: string;
  @IsNotEmpty()
  @IsString()
  readonly type: string;
  @IsNotEmpty()
  @IsString()
  readonly price: string;
  @IsNotEmpty()
  @IsString()
  readonly code: string;

}