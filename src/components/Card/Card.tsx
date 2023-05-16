import React from 'react';
import BackCard from '../BackCard/BackCard';
import { Pokemon } from '@/types/types';
import FrontCard from '../FrontCard/FrontCard';

type Props = {
	pokemonAssert: number[];
	pokemonInCache: number[];
	pokemonFlip: number[];
	index: number;
	pokemon: Pokemon;
	handleAddCachePokemon: (index: number, pokemon: Pokemon) => void;
};

export default function Card({
	index,
	pokemon,
	pokemonInCache,
	pokemonAssert,
	pokemonFlip,
	handleAddCachePokemon,
}: Props) {
	return (
		<div
			className="card__perspective"
			onClick={() => handleAddCachePokemon(index, pokemon)}
		>
			<div
				className={`card__flip ${
					pokemonInCache.includes(index) ||
					pokemonAssert.includes(index) ||
					pokemonFlip.includes(index)
						? 'card__click'
						: ''
				}`}
			>
				<FrontCard pokemon={pokemon} />
				<BackCard />
			</div>
		</div>
	);
}
