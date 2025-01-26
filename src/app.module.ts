import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import * as Modules from './app';

@Module({
  imports: [
    PrismaModule,
    Modules.UsersModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
