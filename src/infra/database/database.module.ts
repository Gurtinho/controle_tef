import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TefRepository } from '@app/repositories/tef-repository';
import { PrismaTefRepository } from './prisma/repositories/prisma-tef-repository';

@Module({
	providers: [
		PrismaService,
		{
			provide: TefRepository,
			useClass: PrismaTefRepository,
		},
	],
	exports: [TefRepository],
})
export class DatabaseModule {}
