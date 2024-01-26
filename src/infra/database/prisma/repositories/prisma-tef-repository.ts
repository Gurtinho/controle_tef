import { Injectable } from '@nestjs/common';
import { Tef } from '@app/entities/tef';
import { TefRepository } from '@app/repositories/tef-repository';
import { PrismaService } from '../prisma.service';
import { PrismaTefMapper } from '../mappers/prisma-tef-mapper';

@Injectable()
export class PrismaTefRepository implements TefRepository {
	constructor(private prisma: PrismaService) {}

	async findById(tefId: string): Promise<Tef | null> {
		const tef = await this.prisma.tef.findUnique({
			where: {
				id: tefId,
			},
		});

		if (!tef) {
			return null;
		}

		return PrismaTefMapper.toDomain(tef);
	}

	async create(tef: Tef): Promise<void> {
		const raw = PrismaTefMapper.toPrisma(tef);

		await this.prisma.tef.create({
			data: raw,
		});
	}

	async update(tef: Tef): Promise<void> {
		const raw = PrismaTefMapper.toPrisma(tef);

		await this.prisma.tef.update({
			data: raw,
			where: {
				id: raw.id,
			},
		});
	}

	async remove(tefId: string): Promise<void> {
		await this.prisma.tef.delete({
			where: {
				id: tefId,
			},
		});
	}
}
