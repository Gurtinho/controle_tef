import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsAlphanumeric,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class GetDataCancelTefDTO {
	@IsNotEmpty()
	@IsAlphanumeric()
	header = 'CNC';

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	identificacao: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	documento_fiscal_vinculado: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	valor_total: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber({
		maxDecimalPlaces: 1,
	})
	moeda: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	cmc7: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	status_transacao: string; // DDMMAAAA

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	nome_rede: string; // OPERADORA/CREDENCIADORA = CIELO, REDE, GETNET, BIN, STONE, etc.

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	cnpj_rede: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	codigo_sat_rede: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	tipo_de_transacao: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	numero_transacao_nsu: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	codigo_autorizacao_transacao: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_lote_transacao: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	timestamp_transacao_host: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	timestamp_transacao_local: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	data_transacao_comprovante: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	hora_transacao_comprovante: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	numero_transacao_cancelada_nsu: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	timestamp_transacao_cancelada: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	finalizacao: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	quantidade_linhas_comprovante: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	imagem_cada_linha_comprovante: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	texto_especial_operador: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	texto_especial_cliente: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	banco: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	agencia: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	agencia_dc: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	conta_corrente: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	conta_corrente_dc: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_cheque: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_cheque_dc: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsAlphanumeric()
	nome_administradora_bandeira: string; // ELECTRON, MAESTRO, MASTERCARD, VISA, ELO, GOODCARD, VALECARD, etc

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_transacao_nsu_host: number;

	@IsNotEmpty()
	@IsNumber()
	trailer_registro_final = 0;
}
