import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/replace';

export interface TefProps {
	category: string;
	createdAt: Date;
}

export class Tef {
	private _id: string;
	private props: TefProps;

	constructor(props: Replace<TefProps, { createdAt?: Date }>, id?: string) {
		this._id = id ?? randomUUID();
		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date(),
		};
	}

	public get id(): string {
		return this._id;
	}

	public set category(category: string) {
		this.props.category = category;
	}

	public get category(): string {
		return this.props.category;
	}

	public get createdAt(): Date {
		return this.props.createdAt;
	}
}
