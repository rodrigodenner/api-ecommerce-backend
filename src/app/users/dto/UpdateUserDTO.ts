import { PartialType } from "@nestjs/mapped-types";
import {CreateUserDto} from "./createUserDto";


export class UpdateUserDTO extends PartialType(CreateUserDto) {}