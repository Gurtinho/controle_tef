import { SetTef } from '@app/use-cases/set-tef';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SetTefPayload {
	category: string;
}

@Controller()
export class TefController {
	constructor(private setTef: SetTef) {}

	@EventPattern('tef.set-tef')
	async handleSetTef(@Payload() { category }: SetTefPayload) {
		await this.setTef.execute({
			category,
		});
	}
}
