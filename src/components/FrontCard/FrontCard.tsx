import { Pokemon } from '@/types/types';
import React from 'react';
import TextInfo from '../TextInfo/TextInfo';
import Image from 'next/image';
import InfoPoke from '../InfoPoke/InfoPoke';
import TitlePokemon from '../TitlePokemon/TitlePokemon';

type Props = {
	pokemon: Pokemon;
};

interface WH {
	weight: string;
	height: string;
}

export default function FrontCard({ pokemon }: Props) {
	const allStats = pokemon.stats.slice(0, 3).map((pokemon) => ({
		name: pokemon.stat.name,
		info: `${pokemon.base_stat}`,
	}));
	const widthHeight: WH = {
		height: `${pokemon.height}`,
		weight: `${pokemon.weight}`,
	};
	const allWH: [string, string][] = Object.entries(widthHeight);

	return (
		<article className="card">
			<div className="card__container">
				<Image
					className="card__image"
					src={pokemon.sprites.other?.dream_world.front_default ?? ''}
					alt=""
					width={100}
					height={100}
				/>
				<section className="card__section">
					<TitlePokemon name={pokemon.name} types={pokemon.types} />
					<InfoPoke>
						{allWH.map((pokemon) => (
							<TextInfo name={pokemon[0]} info={pokemon[1]} />
						))}
					</InfoPoke>
					<InfoPoke>
						{allStats.map(({ info, name }) => (
							<TextInfo name={name} info={info} />
						))}
					</InfoPoke>
				</section>
			</div>
		</article>
	);
}
