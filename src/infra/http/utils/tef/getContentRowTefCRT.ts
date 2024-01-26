import { GetDataRegisterTefDTO } from '@infra/http/dtos/content/GetDataRegisterTefDTO';
import { TefViewModel } from '@infra/http/view-models/tef-view-model';
import { convertFullDate, convertTime } from '../dateConverter';

export function getContentRowTefCRT(content: GetDataRegisterTefDTO): string {
	const contentMerged = TefViewModel.toTEF({
		'000-000': content.header,
		'001-000': content.identificacao,
		'002-000': content.documento_fiscal_vinculado,
		'003-000': content.valor_total,
		'004-000': content.moeda,
		'010-000': content.nome_rede,
		'012-000': content.numero_transacao_nsu,
		'022-000': convertFullDate(content.data_transacao_comprovante),
		'023-000': convertTime(content.hora_transacao_comprovante),
		'800-007': content.codigo_de_controle_cancelamento_vendas,
		'999-999': content.trailer_registro_final,
	});
	return contentMerged;
}
