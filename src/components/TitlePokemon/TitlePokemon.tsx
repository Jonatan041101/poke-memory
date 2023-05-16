import { Type } from '@/types/types';
import React from 'react';
import NamePoke from '../NamePoke/NamePoke';
import Image from 'next/image';

type Props = {
	name: string;
	types: Type[];
};

export default function TitlePokemon({ name, types }: Props) {
	return (
		<section className="card__types">
			<NamePoke name={name} />
			{types.map(({ type }, index) => (
				<Image
					key={`${type.name}-${index}`}
					src={`/assets/Types/${type.name}.png`}
					alt={`Tipos del pokemon ${type.name}`}
					width={20}
					height={20}
				/>
			))}
		</section>
	);
}
