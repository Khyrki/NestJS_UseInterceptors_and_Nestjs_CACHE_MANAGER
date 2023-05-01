import {
  Controller,
  HttpStatus,
  Injectable,
  Post,
  Get,
  UseInterceptors,
  Version,
  Body,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserByInterceptor } from './interceptor/createUserByInterceptor';
import { CreateUserDto } from './dto/createUser.dto';
import { CreateUserByInterceptorResponse } from './swagger/createUserByInterceptorResponse';
import { FindUserDto } from './dto/findUser.dto';
import { Cache } from 'cache-manager';
import { Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Controller('user')
@ApiTags('User')
@Injectable()
export class UserController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @UseInterceptors(CreateUserByInterceptor)
  @Post('registration')
  @Version('1')
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateUserByInterceptorResponse,
  })
  userRegistration(@Body() data: CreateUserDto) {
    return { id: '123456789', ...data };
  }

  @Get()
  @Version('1')
  @ApiResponse({
    status: HttpStatus.OK,
    type: FindUserDto,
  })
  async getUser() {
    const user = await this.cacheManager.get('user');
    if (!user) {
      return 'Usuario nao encontrado';
    }
    return user;
  }
}
