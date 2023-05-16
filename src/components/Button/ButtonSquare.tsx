import React from 'react';
import Icon from '../Icons/Icon';
import { IconsTypes } from '@/types/types';
interface Props {
	icon?: IconsTypes;
	text: string;
}
export default function ButtonSquare({ text, icon }: Props) {
	return (
		<button className="dificulty__button">
			{text} {icon && <Icon nameIcon={icon} />}
		</button>
	);
}
