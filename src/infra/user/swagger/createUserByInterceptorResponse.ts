import { ApiProperty } from '@nestjs/swagger';

export class CreateUserByInterceptorResponse {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  nome: string;
}
