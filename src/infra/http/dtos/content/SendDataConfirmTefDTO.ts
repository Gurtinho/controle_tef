import { ApiProperty } from '@nestjs/swagger';
import {
	IsAlphanumeric,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class SendDataConfirmTefDTO {
	@IsNotEmpty()
	@IsAlphanumeric()
	header = 'CNF';

	@ApiProperty({
		description: 'Identificação retornada na criação/cancelamento da venda.',
	})
	@IsNotEmpty()
	@IsString()
	identificacao: string;

	@IsOptional()
	@IsString()
	nome_rede: string;

	@IsOptional()
	@IsNumber()
	numero_transacao_nsu_host: number;

	@IsOptional()
	@IsString()
	finalizacao: string;

	@IsNotEmpty()
	@IsNumber()
	trailer_registro_final = 0;
}
