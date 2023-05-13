import { Historial } from '@/games/types/types';
import Image from 'next/image';
import React from 'react';
import ImageHistorial from '../ImageHistorial/ImageHistorial';
import TitleTyping from '../TitleTyping/TitleTyping';
import Icon from '../Icons/Icon';

type Props = {
	historial: Historial;
};

export default function InfoHistorial({ historial }: Props) {
	return (
		<div className="historial__article">
			<div className="historial__overflow">
				<TitleTyping text={historial.time.toLocaleTimeString()} />
			</div>
			<ImageHistorial
				image={historial.first?.image ?? ''}
				name={historial.first?.name ?? ''}
			/>
			<div className="historial__icon">
				{historial.assert ? <Icon nameIcon="Nice" /> : <Icon nameIcon="Bad" />}
			</div>
			<ImageHistorial
				image={historial.second?.image ?? ''}
				name={historial.second?.name ?? ''}
			/>
		</div>
	);
}
