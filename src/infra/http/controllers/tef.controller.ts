import { Body, Controller, Post, Headers, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TefService } from '../services/tef.service';
import { SendHeadersTefDTO } from '../dtos/headers/SendHeadersTefDTO';
import { GetHeadersTefDTO } from '../dtos/headers/GetHeadersTefDTO';
import { SendDataRegisterTefDTO } from '../dtos/content/SendDataRegisterTefDTO';
import { SendDataCancelTefDTO } from '../dtos/content/SendDataCancelTefDTO';
import { GetDataRegisterTefDTO } from '../dtos/content/GetDataRegisterTefDTO';
import { GetDataCancelTefDTO } from '../dtos/content/GetDataCancelTefDTO';
import { SendResponseTefDTO } from '../dtos/responses/SendResponseTefDTO';
import { SendDataConfirmTefDTO } from '../dtos/content/SendDataConfirmTefDTO';
import { SendHeadersTefConfirmCancelDTO } from '../dtos/headers/SendHeadersTefCofirmCancelDTO';
import { TefViewModel } from '../view-models/tef-view-model';

@ApiTags('TEF')
@Controller()
export class TefController {
	constructor(private readonly tefService: TefService) {}

	@ApiOperation({
		summary: 'Cadastrar uma venda',
		description: 'Pedido de autorização para transação por meio de cartão.',
	})
	@Post('enviarVenda')
	public async enviarVenda(
		@Body() conteudo: SendDataRegisterTefDTO,
		@Headers() { cnpj, pdv, token }: SendHeadersTefDTO,
	): Promise<SendResponseTefDTO> {
		const dados = await this.tefService.enviarDadosVendaTef(
			{
				cnpj,
				pdv,
				token,
			},
			conteudo,
		);
		return dados;
	}

	@ApiOperation({
		summary: 'Obter dados da venda',
		description:
			'Obter os dados da venda efetuada por qualquer meio de pagamento.',
	})
	@Get('obterVenda')
	public async obterVendas(
		@Headers() { hash, token }: GetHeadersTefDTO,
	): Promise<GetDataRegisterTefDTO> {
		const dados = await this.tefService.obterDadosVendasTef({
			hash,
			token,
		});
		return TefViewModel.toHTTP<GetDataRegisterTefDTO>(dados);
	}

	@ApiOperation({
		summary: 'Cancelar venda já cadastrada',
		description:
			'Cancelamento de venda efetuada por qualquer meio de pagamento.',
	})
	@Post('cancelarVenda')
	public async cancelarVenda(
		@Body() conteudo: SendDataCancelTefDTO,
		@Headers() { cnpj, pdv, token, hash }: SendHeadersTefConfirmCancelDTO,
	): Promise<SendResponseTefDTO> {
		const dados = await this.tefService.cancelarVendaTef(
			{
				cnpj,
				pdv,
				token,
				hash,
			},
			conteudo,
		);
		return dados;
	}

	@ApiOperation({
		summary: 'Obter dados de cancelamento da venda',
		description:
			'Buscar os dados do cancelamento da venda efetuada por qualquer meio de pagamento.',
	})
	@Get('obterCancelamentoVenda')
	public async obterCancelamentoVenda(
		@Headers() { hash, token }: GetHeadersTefDTO,
	): Promise<GetDataCancelTefDTO> {
		const dados = await this.tefService.obterDadosCancelamentoVendasTef({
			hash,
			token,
		});
		return TefViewModel.toHTTP<GetDataCancelTefDTO>(dados);
	}

	@ApiOperation({
		summary: 'Confirmar a venda/cancelamento',
		description: 'Efetuar a confirmação de uma venda ou de um cancelamento.',
	})
	@Post('confirmarVenda')
	public async confirmarVenda(
		@Body() conteudo: SendDataConfirmTefDTO,
		@Headers() { cnpj, pdv, token, hash }: SendHeadersTefConfirmCancelDTO,
	): Promise<SendResponseTefDTO> {
		const dados = await this.tefService.confirmarVendaTEF(
			{
				cnpj,
				pdv,
				token,
				hash,
			},
			conteudo,
		);
		return dados;
	}
}
