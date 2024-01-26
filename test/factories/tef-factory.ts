import { Tef, TefProps } from '@app/entities/tef';

type Override = Partial<TefProps>;

export function makeTef(override: Override = {}) {
	return new Tef({
		category: 'social',
		...override,
	});
}
