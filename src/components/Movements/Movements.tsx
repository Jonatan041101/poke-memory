import React from 'react';
import { terminal } from '@/utils/image-cloudinary';
import TitleTyping from '../TitleTyping/TitleTyping';
import { Historial } from '@/games/types/types';
import CardHistorial from '../CardHistorial/CardHistorial';

type Props = {
	historial: (string | Historial)[];
};

const title = 'Movimientos realizados';
export default function Movements({ historial }: Props) {
	return (
		<div className="card__movements">
			<TitleTyping text={title} image={terminal} />
			<section className="historial">
				{historial.map((info, index) => (
					<CardHistorial key={index} info={info} />
				))}
			</section>
		</div>
	);
}
