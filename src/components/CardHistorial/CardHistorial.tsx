import { Historial } from '@/games/types/types';
import React from 'react';
import InfoHistorial from '../InfoHistorial/InfoHistorial';
import TitleTyping from '../TitleTyping/TitleTyping';

type Props = {
	info: string | Historial;
};

export default function CardHistorial({ info }: Props) {
	return (
		<>
			{typeof info === 'string' ? (
				<div className="historial__text">
					<TitleTyping text={info} />
				</div>
			) : (
				<InfoHistorial historial={info} />
			)}
		</>
	);
}
