import { Change } from '@/types/types';
import React from 'react';

type Props = {
	value: string;
	description: string;
	placeholder: string;
	handleChange: (evt: Change) => void;
};

export default function Input({
	handleChange,
	value,
	description,
	placeholder,
}: Props) {
	return (
		<label className="user__label">
			{description} :
			<input
				className="user__input"
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</label>
	);
}
