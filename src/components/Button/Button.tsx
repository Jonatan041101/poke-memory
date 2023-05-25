import React from 'react';
import Icon from '../Icons/Icon';
import { IconsTypes } from '@/types/types';

interface Props {
	text: string;
	handleClick: () => void;
	icon?: IconsTypes;
	ability?: string;
	description?: string;
}

export default function Button({
	text = 'Doble Carta',
	handleClick,
	icon,
	ability,
	description,
}: Props) {
	return (
		<div className="button__div" onClick={handleClick}>
			<div className="button">
				<button className="button__button">
					<span className="button__span">{text}</span>
					{icon && (
						<i className="button__i">
							{ability && <div className="button__ability">{ability}</div>}
							<Icon nameIcon={icon} />
						</i>
					)}
				</button>
			</div>
			{description && <span className="button__description">{description}</span>}
		</div>
	);
}
