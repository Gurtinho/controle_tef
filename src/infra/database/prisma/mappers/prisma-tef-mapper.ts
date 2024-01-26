import { Tef as rawTef } from '@prisma/client';
import { Tef } from '@app/entities/tef';

// Cria a entidade global pra ser usada no prisma
export class PrismaTefMapper {
	static toPrisma(tef: Tef) {
		return {
			id: tef.id,
			category: tef.category,
		};
	}

	// Retorna os dados do prisma para a camada de domínio da aplicação
	static toDomain(raw: rawTef): Tef {
		return new Tef(
			{
				category: raw.category,
			},
			raw.id,
		);
	}
}
