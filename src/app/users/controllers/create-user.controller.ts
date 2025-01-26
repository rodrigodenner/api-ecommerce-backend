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
import {CreateUserService} from "../services";

@Controller('user')
export class CreateUserController {
  constructor( private readonly createUserService: CreateUserService) {}
  @HttpCode(HttpStatus.CREATED)
  @Post('create-user')

  async handle(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.createUserService.execute(createUserDto);
    }catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

}
