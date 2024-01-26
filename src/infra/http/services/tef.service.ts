import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SendHeadersTefDTO } from '../dtos/headers/SendHeadersTefDTO';
import { GetHeadersTefDTO } from '../dtos/headers/GetHeadersTefDTO';
import { SendDataRegisterTefDTO } from '../dtos/content/SendDataRegisterTefDTO';
import { SendDataCancelTefDTO } from '../dtos/content/SendDataCancelTefDTO';
import { SendResponseTefDTO } from '../dtos/responses/SendResponseTefDTO';
import { SendDataConfirmTefDTO } from '../dtos/content/SendDataConfirmTefDTO';
import { SendHeadersTefConfirmCancelDTO } from '../dtos/headers/SendHeadersTefCofirmCancelDTO';
import { GetDataRegisterTefDTO } from '../dtos/content/GetDataRegisterTefDTO';
import { setContentRowTefCRT } from '../utils/tef/setContentRowTefCRT';
import { setContentRowTefCNC } from '../utils/tef/setContentRowTefCNC';
import { setContentRowTefCNF } from '../utils/tef/setContentRowTefCNF';
import { verifyHeadersEmpty } from '../validators/verifyHeadersEmpty';
import { TefViewModel } from '../view-models/tef-view-model';
import { cnpj as CnpjValidator } from 'cpf-cnpj-validator';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

@Injectable()
export class TefService {
	// todos os dados deverão ser enviados através dos headers
	public async enviarDadosVendaTef(
		{ cnpj, pdv, token }: SendHeadersTefDTO,
		conteudo: SendDataRegisterTefDTO,
	): Promise<SendResponseTefDTO> {
		verifyHeadersEmpty({
			cnpj,
			pdv,
			token,
		});

		if (!CnpjValidator.isValid(cnpj)) {
			throw new HttpException('CNPJ deve ser válido.', HttpStatus.BAD_REQUEST);
		}

		// Vai gerar um uuid para a venda do tef.
		conteudo.identificacao = uuid();

		const headers = {
			cnpj,
			token,
			pdv,
			conteudo: setContentRowTefCRT(conteudo),
		};
		try {
			const response = await axios.post(
				'https://api.multipluscard.com.br/api/Servicos/SetVendaTef',
				null,
				{ headers },
			);
			return {
				hash: response.data,
				identificacao: conteudo.identificacao,
			};
		} catch (error) {
			throw error;
		}
	}

	public async obterDadosVendasTef({
		hash,
		token,
	}: GetHeadersTefDTO): Promise<string> {
		verifyHeadersEmpty({
			hash,
			token,
		});
		const headers = {
			hash,
			token,
		};
		try {
			const response = await axios.get(
				'https://api.multipluscard.com.br/api/Servicos/GetVendasTef',
				{ headers },
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	public async cancelarVendaTef(
		{ cnpj, pdv, token, hash }: SendHeadersTefConfirmCancelDTO,
		conteudo: SendDataCancelTefDTO,
	): Promise<SendResponseTefDTO> {
		verifyHeadersEmpty({
			cnpj,
			pdv,
			token,
			hash,
		});

		if (!CnpjValidator.isValid(cnpj)) {
			throw new HttpException('CNPJ deve ser válido.', HttpStatus.BAD_REQUEST);
		}

		// Obtém dados da venda
		let { data } = await axios.get(
			'https://api.multipluscard.com.br/api/Servicos/GetVendasTef',
			{ headers: { hash, token } },
		);

		data = TefViewModel.toHTTP<GetDataRegisterTefDTO>(data);

		// Setando os campos faltantes
		conteudo.nome_rede = data.nome_rede;
		conteudo.valor_total = data.valor_total;
		conteudo.numero_transacao_nsu = data.numero_transacao_nsu;
		conteudo.data_transacao_comprovante = data.data_transacao_comprovante;
		conteudo.hora_transacao_comprovante = data.hora_transacao_comprovante;
		conteudo.tipo_de_transacao = data.tipo_de_transacao;
		conteudo.forma_de_pagamento = data.forma_de_pagamento;
		conteudo.codigo_de_controle_cancelamento_vendas =
			data.codigo_de_controle_cancelamento_vendas;

		const headers = {
			cnpj,
			token,
			pdv,
			conteudo: setContentRowTefCNC(conteudo),
		};
		try {
			const response = await axios.post(
				'https://api.multipluscard.com.br/api/Servicos/SetVendaTef',
				null,
				{ headers },
			);
			return {
				hash: response.data,
				identificacao: conteudo.identificacao,
			};
		} catch (error) {
			throw error;
		}
	}

	public async obterDadosCancelamentoVendasTef({
		hash,
		token,
	}: GetHeadersTefDTO) {
		verifyHeadersEmpty({
			hash,
			token,
		});
		try {
			const response = await axios.get(
				'https://api.multipluscard.com.br/api/Servicos/GetVendasTef',
				{ headers: { hash, token } },
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}

	public async confirmarVendaTEF(
		{ cnpj, pdv, token, hash }: SendHeadersTefConfirmCancelDTO,
		conteudo: SendDataConfirmTefDTO,
	) {
		verifyHeadersEmpty({
			cnpj,
			pdv,
			token,
			hash,
		});

		if (!CnpjValidator.isValid(cnpj)) {
			throw new HttpException('CNPJ deve ser válido.', HttpStatus.BAD_REQUEST);
		}

		// Obtém dados da venda
		let { data } = await axios.get(
			'https://api.multipluscard.com.br/api/Servicos/GetVendasTef',
			{ headers: { hash, token } },
		);

		data = TefViewModel.toHTTP<GetDataRegisterTefDTO>(data);

		// Setando os campos faltantes
		conteudo.nome_rede = data.nome_rede;
		conteudo.numero_transacao_nsu_host = data.numero_transacao_nsu_host;
		conteudo.finalizacao = data.finalizacao;

		const headers = {
			cnpj,
			token,
			pdv,
			conteudo: setContentRowTefCNF(conteudo),
		};
		try {
			const response = await axios.post(
				'https://api.multipluscard.com.br/api/Servicos/SetVendaTef',
				null,
				{ headers },
			);
			return {
				hash: response.data,
				identificacao: conteudo.identificacao,
			};
		} catch (error) {
			throw error;
		}
	}
}
