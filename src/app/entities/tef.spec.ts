import { Tef } from './tef';

describe('Tef', () => {
	it('should be able to create a tef', () => {
		const tef = new Tef({
			category: 'social',
		});

		expect(tef).toBeTruthy();
	});
});
