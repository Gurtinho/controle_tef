import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendHeadersTefDTO {
	@ApiProperty({
		description: 'Cnpj (sem pontuação) do cliente referente à venda.',
	})
	@IsNotEmpty()
	@IsString()
	cnpj: string;

	@ApiProperty({
		description: 'Número do PDV formatado em 3 casas. ex: "001".',
	})
	@IsNotEmpty()
	@IsString()
	pdv: string;

	@ApiProperty({
		description: 'Código que o Client do TEF gera para utilização do serviço.',
	})
	@IsNotEmpty()
	@IsString()
	token: string;
}
