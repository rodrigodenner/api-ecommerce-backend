import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {CreateUserDto} from "../dto/createUserDto";
import {UserService} from "../service/user.service";
import {UserInterface} from "../interface/userInterface";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return await this.userService.createUser(createUserDto)
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<UserInterface[]>{
    return await this.userService.getAll()
  }

  @Get(':id')
  async findById(@Param('id') id: number){
   return await this.userService.getById(id)
  }
}
