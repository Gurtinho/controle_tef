import { ApiProperty } from '@nestjs/swagger';
import {
	IsAlphanumeric,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class SendDataCancelTefDTO {
	@IsNotEmpty()
	@IsAlphanumeric()
	header = 'CNC';

	@ApiProperty({
		description: 'Identificação da venda no sistema de homologação do TEF.',
	})
	@IsNotEmpty()
	@IsString()
	identificacao: string;

	@IsOptional()
	@IsString()
	valor_total: string;

	@IsOptional()
	@IsAlphanumeric()
	nome_rede: string; // OPERADORA/CREDENCIADORA = CIELO, REDE, GETNET, BIN, STONE, etc.

	@IsOptional()
	@IsNumber()
	numero_transacao_nsu: number;

	@IsOptional()
	@IsString()
	data_transacao_comprovante: string;

	@IsOptional()
	@IsString()
	hora_transacao_comprovante: string;

	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	tipo_de_transacao: number;

	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	forma_de_pagamento: number;

	@IsOptional()
	@IsAlphanumeric()
	codigo_de_controle_cancelamento_vendas: string;

	@IsNotEmpty()
	@IsNumber()
	trailer_registro_final = 0;
}
