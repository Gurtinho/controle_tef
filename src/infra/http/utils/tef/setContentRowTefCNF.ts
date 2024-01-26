import { SendDataConfirmTefDTO } from '@infra/http/dtos/content/SendDataConfirmTefDTO';
import { TefViewModel } from '@infra/http/view-models/tef-view-model';

export function setContentRowTefCNF(content: SendDataConfirmTefDTO): string {
	const contentMerged = TefViewModel.toTEF({
		'000-000': content.header,
		'001-000': content.identificacao,
		'010-000': content.nome_rede,
		'012-000': content.numero_transacao_nsu_host,
		'027-000': content.finalizacao,
		'999-999': content.trailer_registro_final,
	});
	return contentMerged;
}
