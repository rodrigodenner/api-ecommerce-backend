import {ConflictException, Injectable, InternalServerErrorException} from "@nestjs/common";
import {PrismaService} from "../../../prisma/prisma.service";
import {CreateUserDto} from "../dto/createUserDto";
import {hash} from "bcrypt";
import {UserExistenceService} from "./user-existence.service";

@Injectable()
export class CreateUserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userExistenceService: UserExistenceService,
  ) {
  }

  async execute(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userExistenceService.checkUserExists(createUserDto.email, createUserDto.cpf);

      if (existingUser) throw new ConflictException("User already exists");
      const passwordHash = await hash(createUserDto.password, 10);
      const newUser = await this.prismaService.users.create({
        data: { ...createUserDto, password: passwordHash, type_user: 1},
      });

      return newUser;
    } catch (error) {
      if (error instanceof ConflictException) throw error;
      throw new InternalServerErrorException("Error interno no servidor!");
    }
  }
}
