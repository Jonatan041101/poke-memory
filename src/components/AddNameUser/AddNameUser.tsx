import React, { useState } from 'react';
import Input from '../Input/Input';
import { Change, Form } from '@/types/types';
import { useBearStore } from '@/store/store';

export default function AddNameUser() {
	const { changeName, userName } = useBearStore((state) => state);
	const handleChange = (evt: Change) => {
		const { value } = evt.currentTarget;
		changeName(value);
	};
	const handleAddNameUser = (evt: Form) => {
		evt.preventDefault();
	};

	return (
		<form onSubmit={handleAddNameUser} className="user">
			<Input
				placeholder={'Como The Best...'}
				description={'Nick'}
				value={userName}
				handleChange={handleChange}
			/>
		</form>
	);
}
