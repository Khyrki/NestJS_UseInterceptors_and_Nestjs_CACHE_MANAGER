import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Interceptor com cache nativo')
    .setDescription(
      'Essa é uma api teste para desmonstrar a implementacao dos interceptor do nest junto com o cache nativo',
    )
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () => {
    console.log(`API disponivel em: http://localhost:${port}/swagger`);
  });
}
bootstrap();
