import { SendDataRegisterTefDTO } from '@infra/http/dtos/content/SendDataRegisterTefDTO';
import { TefViewModel } from '@infra/http/view-models/tef-view-model';

export function setContentRowTefCRT(content: SendDataRegisterTefDTO): string {
	const contentMerged = TefViewModel.toTEF({
		'000-000': content.header,
		'001-000': content.identificacao,
		'003-000': content.valor_total,
		'004-000': content.moeda,
		'800-001': content.tipo_de_transacao,
		'800-002': content.forma_de_pagamento,
		'800-003': content.juros_da_transacao,
		'800-004': content.quantidade_de_parcelas,
		'999-999': content.trailer_registro_final,
	});
	return contentMerged;
}
