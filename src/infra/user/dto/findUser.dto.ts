import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @ApiProperty({
    type: String,
    example: '123456789',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Joao da Silva',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: 'M or F',
  })
  sex: string;

  @ApiProperty({
    type: Number,
    example: 21,
  })
  age: number;
}
