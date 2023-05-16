import { backCard } from '@/utils/image-cloudinary';
import Image from 'next/image';
import React from 'react';
import Icon from '../Icons/Icon';

export default function LoadingHome() {
	return (
		<div className="loading">
			<div className="loading__container">
				<p className="loading__p">POKEMON JUEGO DE MEMORIA</p>
				<i className="loading__pokeball">
					<Icon nameIcon="Pokeball" />
				</i>
			</div>
		</div>
	);
}
