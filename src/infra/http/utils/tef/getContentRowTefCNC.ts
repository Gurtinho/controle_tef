import { GetDataCancelTefDTO } from '@infra/http/dtos/content/GetDataCancelTefDTO';
import { TefViewModel } from '@infra/http/view-models/tef-view-model';
import { convertDate, convertFullDate, convertTime } from '../dateConverter';

export function getContentRowTefCNC(content: GetDataCancelTefDTO): string {
	const contentMerged = TefViewModel.toTEF({
		'000-000': content.header,
		'001-000': content.identificacao,
		'002-000': content.documento_fiscal_vinculado,
		'003-000': content.valor_total,
		'005-000': content.cmc7,
		'009-000': content.status_transacao,
		'010-0X0': content.nome_rede,
		'010-0X1': content.cnpj_rede,
		'010-0X2': content.codigo_sat_rede,
		'011-00X': content.tipo_de_transacao,
		'012-00X': content.numero_transacao_nsu,
		'013-00X': content.codigo_autorizacao_transacao,
		'014-000': content.numero_lote_transacao,
		'015-000': convertDate(content.timestamp_transacao_host),
		'016-000': convertDate(content.timestamp_transacao_local),
		'022-000': convertFullDate(content.data_transacao_comprovante),
		'023-000': convertTime(content.hora_transacao_comprovante),
		'025-000': content.numero_transacao_cancelada_nsu,
		'026-000': convertDate(content.timestamp_transacao_cancelada),
		'027-000': content.finalizacao,
		'028-000': content.quantidade_linhas_comprovante,
		'029-yyy': content.imagem_cada_linha_comprovante,
		'030-000': content.texto_especial_operador,
		'031-000': content.texto_especial_cliente,
		'033-000': content.banco,
		'034-000': content.agencia,
		'035-000': content.agencia_dc,
		'036-000': content.conta_corrente,
		'037-000': content.conta_corrente_dc,
		'038-000': content.numero_cheque,
		'039-000': content.numero_cheque_dc,
		'040-00X': content.nome_administradora_bandeira,
		'170-000': content.numero_transacao_nsu_host,
		'999-999': content.trailer_registro_final,
	});
	return contentMerged;
}
