import { IsEmail,IsString,IsNumber,isNotEmpty, IsNotEmpty } from "class-validator"

export class SignUpDto{

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsNumber()
    mobile:number

    @IsString()
    role:string

    @IsNotEmpty()
    token:string

}