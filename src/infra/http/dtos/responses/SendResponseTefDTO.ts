import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty, IsOptional } from 'class-validator';

export class SendResponseTefDTO {
	@ApiProperty()
	@IsNotEmpty()
	@IsAlphanumeric()
	hash: string;

	@ApiProperty()
	@IsOptional()
	@IsAlphanumeric()
	identificacao: string;
}
