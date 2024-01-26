import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // ignora oq não estiver no DTO
			forbidNonWhitelisted: true, // Recusa a requisição caso envie um dado fora do DTO
			transform: true,
		}),
	);
	const config = new DocumentBuilder()
		.setTitle('Controle TEF')
		.setDescription('Api para controle de integração com TEF')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);
	await app.startAllMicroservices();
	await app.listen(3000);
}

bootstrap();
