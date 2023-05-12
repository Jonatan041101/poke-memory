import React from 'react';
import Icon from '../Icons/Icon';
import { IconsTypes } from '@/types/types';

interface Props {
	text: string;
	handleClick: () => void;
	icon?: IconsTypes;
}

export default function Button({
	text = 'Doble Carta',
	handleClick,
	icon,
}: Props) {
	return (
		<div className="button">
			<button className="button__button" onClick={handleClick}>
				<span className="button__span">{text}</span>
				{icon && (
					<i>
						<Icon nameIcon={icon} />
					</i>
				)}
			</button>
		</div>
	);
}
