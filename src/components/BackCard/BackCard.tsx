import { backCard } from '@/utils/image-cloudinary';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function BackCard({}: Props) {
	return (
		<div className="card__back">
			<Image
				src={backCard}
				alt="Parte trasera de la carta"
				width={288}
				height={280}
				className="card__pokeball"
			/>
			{/* // <div className="card__pokeball" /> */}
		</div>
	);
}
