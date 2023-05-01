import { Module } from '@nestjs/common';
import { HealthController } from './app.controller';
import { UserModule } from 'src/infra/user/user.module';
@Module({
  imports: [UserModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
