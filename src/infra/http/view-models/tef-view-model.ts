import { TefFields } from '@infra/common/tefFields';

export class TefViewModel {
	static toTEF(content: Record<string, string | number>): string {
		// exemplo: 000-000 = CRT¬001-000 = 3¬003-000 = 001¬800-001 = 0¬800-002 = 0¬999-999 = 0
		// Agrupa os dados recebidos em uma string no formato correto para o header do TEF
		const entries = Object.entries(content);
		const mergedValues = entries.map(([key, value]) => {
			if (value !== undefined) {
				return `${key} = ${value}`;
			}
		});
		return mergedValues.join('¬');
	}

	static toHTTP<T>(content: string): T {
		// Converte o content recebido da requisição do tef e converte para um objeto
		const keyValue = content.split('¬');
		const convertObject: T = {} as T;
		// { [key: string]: string | number }
		for (const pair of keyValue) {
			const [key, value] = pair.split(' = ');
			const mappedKey = TefFields[key] || key;
			convertObject[mappedKey] = value;
		}
		return convertObject as T;
	}
}
