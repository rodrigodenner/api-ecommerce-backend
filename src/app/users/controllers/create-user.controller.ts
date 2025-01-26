import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post
} from '@nestjs/common';
import {CreateUserDto} from "../dto/createUserDto";

@Controller('user')
export class CreateUserController {
  constructor() {}

  @Post('create-user')
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() createUserDto: CreateUserDto) {
    try {
      this.createUserService.execute(createUserDto);
    }catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

}
