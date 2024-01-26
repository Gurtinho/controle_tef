import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetHeadersTefDTO {
	@ApiProperty({
		description: 'Código de identificação retornado ao incluir uma nova venda.',
	})
	@IsNotEmpty()
	@IsString()
	hash: string;

	@ApiProperty({
		description: 'Código que o Client do TEF gera para utilização do serviço.',
	})
	@IsNotEmpty()
	@IsString()
	token: string;
}
