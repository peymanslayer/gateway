import { Controller } from "@nestjs/common";
import { Get,Post,Delete,Put,Body,Res } from "@nestjs/common";
import { SignUpDto } from "./dtos/signup.dto";
import { Response } from "express";

@Controller('/api')
export class UsersController{
  @Post('/signup')
  async signUp(@Body()user:SignUpDto,@Res()response:Response){
    
  }
}