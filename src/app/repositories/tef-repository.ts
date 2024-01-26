import { Tef } from '../entities/tef';

export abstract class TefRepository {
	abstract create(tef: Tef): Promise<void>;
	abstract findById(tefId: string);
	abstract update(tef: Tef): Promise<void>;
	abstract remove(tefId: string): Promise<void>;
}
