import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "../dto/createUserDto";
import {UserEntity} from "../entities/user.entity";
import {hash} from "bcrypt";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise <UserEntity>{
   createUserDto.password = await hash(createUserDto.password,10)
    let newUser = this.userRepository.save({
      ...createUserDto,
      type_user: 1,
      password: createUserDto.password
    })
    return newUser;
  }

  async getAll(): Promise<UserEntity[]>{
    return await this.userRepository.find();
  }

  async getById(id: number): Promise<UserEntity|null>{

    let user = this.userRepository.findOneByOrFail({id})
    return user || null;
  }

}
