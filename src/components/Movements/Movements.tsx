import React, { useEffect, useRef } from 'react';
import { terminal } from '@/utils/image-cloudinary';
import TitleTyping from '../TitleTyping/TitleTyping';
import { Historial } from '@/games/types/types';
import CardHistorial from '../CardHistorial/CardHistorial';
import { useBearStore } from '@/store/store';

type Props = {
	historial: (string | Historial)[];
};

const title = 'Movimientos realizados';
export default function Movements({ historial }: Props) {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const { openTerminal } = useBearStore((state) => state);
	useEffect(() => {
		if (scrollRef.current !== null) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [historial]);
	return (
		<div className="card__movements" data-x={openTerminal}>
			<TitleTyping text={title} image={terminal} />
			<section className="historial" ref={scrollRef}>
				{historial.length === 0 && (
					<div className="historial__cero">
						<TitleTyping text="Sin movimientos." />
					</div>
				)}
				{historial.map((info, index) => (
					<CardHistorial key={`${JSON.stringify(info)}-${index}`} info={info} />
				))}
			</section>
		</div>
	);
}
