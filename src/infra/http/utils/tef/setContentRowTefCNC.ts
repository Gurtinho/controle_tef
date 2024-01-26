import { SendDataCancelTefDTO } from '@infra/http/dtos/content/SendDataCancelTefDTO';
import { TefViewModel } from '@infra/http/view-models/tef-view-model';

export function setContentRowTefCNC(content: SendDataCancelTefDTO): string {
	const contentMerged = TefViewModel.toTEF({
		'000-000': content.header,
		'001-000': content.identificacao,
		'003-000': content.valor_total,
		'010-000': content.nome_rede,
		'012-000': content.numero_transacao_nsu,
		'022-000': content.data_transacao_comprovante,
		'023-000': content.hora_transacao_comprovante,
		'800-001': content.tipo_de_transacao,
		'800-002': content.forma_de_pagamento,
		'800-007': content.codigo_de_controle_cancelamento_vendas,
		'999-999': content.trailer_registro_final,
	});
	return contentMerged;
}
