import { HttpException, HttpStatus } from '@nestjs/common';

interface IHeaders<T> {
	[key: string]: T;
}

export function verifyHeadersEmpty<T>(data: IHeaders<T>): void {
	const headers = Object.keys(data);
	for (const key of headers) {
		const value = data[key];
		if (!value) {
			throw new HttpException(
				`A propriedade '${key}' do header está vazia.`,
				HttpStatus.BAD_REQUEST,
			);
		}
	}
}
