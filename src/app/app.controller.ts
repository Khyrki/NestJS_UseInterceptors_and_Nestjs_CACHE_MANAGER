import { Controller, Get, Version, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
@ApiTags('Health')
@Injectable()
export class HealthController {
  @Get()
  @Version('1')
  checkStatus() {
    return { status: 'API Running' };
  }
}
