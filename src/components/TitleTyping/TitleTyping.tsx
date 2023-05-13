'use client';
import React from 'react';
import useTyping from '@/hooks/useTyping';
import Image from 'next/image';

type Props = {
	text: string;
	image?: string;
};

export default function TitleTyping({ text, image }: Props) {
	const { typing, imageT } = useTyping(text, image);

	return (
		<div className="title__flex">
			<h2 className="title">{typing}</h2>
			{imageT.length > 0 && (
				<Image
					src={imageT}
					alt="Imagen que representa parte del titulo."
					width={25}
					height={25}
				/>
			)}
		</div>
	);
}
