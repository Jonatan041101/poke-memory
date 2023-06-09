import { Btn } from '@/types/types';
import React from 'react';
import ButtonSquare from './Button/ButtonSquare';

interface Props extends Btn {
	handleClick: (play: boolean) => void;
}
export default function ButtonPlay({ handleClick, text, icon }: Props) {
	return (
		<div className="dificulty" onClick={() => handleClick(true)}>
			<ButtonSquare text={text} icon={icon} />
		</div>
	);
}
