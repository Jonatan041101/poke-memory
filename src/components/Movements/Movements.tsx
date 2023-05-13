import React from 'react';
import { terminal } from '@/utils/image-cloudinary';
import TitleTyping from '../TitleTyping/TitleTyping';

const title = 'Movimientos realizados';
export default function Movements() {
	return (
		<div className="card__movements">
			<TitleTyping text={title} image={terminal} />
		</div>
	);
}
