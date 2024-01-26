import { Injectable } from '@nestjs/common';
import { Tef } from '../entities/tef';
import { TefRepository } from '../repositories/tef-repository';

interface SetTefRequest {
	category: string;
}

interface SetTefResponse {
	tef: Tef;
}

// O uso dos use cases não serão tão necessários
@Injectable()
export class SetTef {
	constructor(private tefRepository: TefRepository) {}

	async execute(request: SetTefRequest): Promise<SetTefResponse> {
		const { category } = request;

		const tef = new Tef({
			category,
		});

		await this.tefRepository.create(tef);

		return {
			tef,
		};
	}
}
