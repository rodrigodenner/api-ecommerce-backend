import {Module} from "@nestjs/common";
import * as S from "./services";
import * as C from "./controllers";

@Module({
  imports: [],
  controllers: [
    C.CreateUserController
  ],
  providers: [
    S.CreateUserService,
    S.UserExistenceService
  ]
})
export class UsersModules {}