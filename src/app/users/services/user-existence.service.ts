import { Injectable, InternalServerErrorException} from "@nestjs/common";
import {PrismaService} from "../../../prisma/prisma.service";

@Injectable()
export class UserExistenceService {
  constructor(private readonly prismaService: PrismaService) {}

  async checkUserExists(email: string, cpf: string) {
   try {
     const existingUser = await this.prismaService.users.findFirst({
       where: {
         OR: [
           {email: email},
           {cpf: cpf},
         ],
       },
     });
     return !!existingUser;
   }catch (error){
     throw new InternalServerErrorException("Error interno no servidor!");
   }

  }
}