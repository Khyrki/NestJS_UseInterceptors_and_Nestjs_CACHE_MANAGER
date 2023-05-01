import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';

@Module({
  imports: [ConfigModule, CacheModule.register()],
  controllers: [UserController],
  providers: [],
  exports: [],
})
export class UserModule {}
