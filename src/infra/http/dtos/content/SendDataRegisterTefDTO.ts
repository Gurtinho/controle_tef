import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsAlphanumeric,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class SendDataRegisterTefDTO {
	@IsNotEmpty()
	@IsAlphanumeric()
	header = 'CRT';

	@IsOptional()
	@IsNumber()
	identificacao: string;

	@ApiProperty({
		description: 'Valor total desta forma de pagamento.',
	})
	@IsNotEmpty()
	@IsString()
	valor_total: string;

	@ApiPropertyOptional({
		description: 'Indica a moeda utilizada na operação.',
	})
	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	moeda: number;

	@ApiPropertyOptional({
		description: 'Tipo de transação (0 = crédito; 1 = débito; 5 = pix).',
	})
	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	tipo_de_transacao: number;

	@ApiPropertyOptional({
		description: 'Forma de pagamento (0 = a vista; 1 = parcelado).',
	})
	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	forma_de_pagamento: number;

	@ApiPropertyOptional({
		description:
			'Juros da transação cobrado (0 = do dono do cartão; 1 = da loja).',
	})
	@IsOptional()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	juros_da_transacao: number;

	@ApiPropertyOptional({
		description: 'Quantidade de parcelas.',
	})
	@IsOptional()
	@IsNumber()
	quantidade_de_parcelas: number;

	@ApiPropertyOptional({
		description: 'CNPJ da empresa.',
	})
	@IsOptional()
	@IsNumber()
	cnpj_do_estabelecimento: number;

	@IsNotEmpty()
	@IsNumber()
	trailer_registro_final = 0;
}
