import Image from 'next/image';
import React from 'react';
import TitleTyping from '../TitleTyping/TitleTyping';

type Props = {
	image: string;
	name: string;
};

export default function ImageHistorial({ image, name }: Props) {
	return (
		<div className="historial__images">
			<TitleTyping text={name} />
			<Image
				src={image ?? ''}
				alt="Pokemon seleccionado anteriormente"
				height={50}
				width={50}
			/>
		</div>
	);
}
