import { Module } from '@nestjs/common';
import { HealthController } from './app.controller';
@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
