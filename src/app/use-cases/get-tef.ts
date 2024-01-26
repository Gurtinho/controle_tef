import { Tef } from '@app/entities/tef';
import { Injectable } from '@nestjs/common';
import { TefRepository } from '../repositories/tef-repository';

interface GetTefRequest {
	id: string;
}

// O uso dos use cases não serão tão necessários
@Injectable()
export class GetTef {
	constructor(private tefRepository: TefRepository) {}

	async execute(request: GetTefRequest): Promise<Tef> {
		const { id } = request;

		const tef = await this.tefRepository.findById(id);

		return tef;
	}
}
