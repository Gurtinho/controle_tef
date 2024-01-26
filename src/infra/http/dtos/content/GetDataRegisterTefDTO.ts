import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
	IsAlphanumeric,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from 'class-validator';

export class GetDataRegisterTefDTO {
	@IsNotEmpty()
	@IsAlphanumeric()
	header = 'CRT';

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
	forma_de_pagamento: number;

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
	@IsNumber()
	timestamp_transacao_host: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsString()
	timestamp_transacao_local: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	tipo_parcelamento: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	quantidade_parcela: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	data_vencimento_parcela: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	valor_parcela: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_transacao_nsu_parcela: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	data_transacao_comprovante: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	hora_transacao_comprovante: string;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	data_pre_datado: number;

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
	nome_administradora_bandeira: string; // ELECTRON, MAESTRO, MASTERCARD, VISA, ELO, GOODCARD, VALECARD, etc

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	numero_transacao_nsu_host: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	numero_cartao_usado_transacao: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	nome_portador_cartao: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	numero_cartao_portador: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	validade_cartao_portador: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	restante_a_ser_pago: number; // Uso de multi cartões

	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	codigo_de_controle_cancelamento_vendas: string; // Codigo a ser usado para cancelar uma venda

	@IsNotEmpty()
	@IsNumber()
	trailer_registro_final = 0;
}
