import React from 'react';
import { Btn } from '@/types/types';
import { NameDificulty } from '@/types/enums';
import ButtonSquare from '../Button/ButtonSquare';

export interface Props extends Btn {
	value: NameDificulty;
	handleClick: (value: NameDificulty) => void;
}

export default function ButtonDificulty({
	text,
	icon,
	handleClick,
	value,
}: Props) {
	return (
		<div className="dificulty" onClick={() => handleClick(value)}>
			<ButtonSquare text={text} icon={icon} />
		</div>
	);
}
