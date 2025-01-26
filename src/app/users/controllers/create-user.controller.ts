import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "../dto/createUserDto";
import {UserService} from "../service/user.service";
import {UserEntity} from "../entities/user.entity";

@Controller('user')
export class CreateUserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create() {
    return 
  }

}
