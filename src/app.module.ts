import { Module } from '@nestjs/common';
import { UserController } from './app/user/controller/user.controller';
import { UserModule } from './app/user/module/user.module';
import { UserService } from './app/user/service/user.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
