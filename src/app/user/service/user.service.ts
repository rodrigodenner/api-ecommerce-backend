import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "../dto/createUserDto";
import {UserInterface} from "../interface/userInterface";
import {hash} from "bcrypt";

@Injectable()
export class UserService {
  private users: UserInterface[] = [];

  async createUser(createUserDto: CreateUserDto): Promise <UserInterface>{
   createUserDto.password = await hash(createUserDto.password,10)

    const user: UserInterface = {
     ...createUserDto,
      id: this.users.length + 1,
      password: createUserDto.password
    }
    this.users.push(user)
    return user
  }

  async getAll(): Promise<UserInterface[]>{
    if(this.users.length === 0){
      return [];
    }
    return this.users
  }

  async getById(id: number): Promise<UserInterface|null>{

    let user = this.users.find(user => user.id === id)
    console.log(user)
    return user || null;
  }

}
