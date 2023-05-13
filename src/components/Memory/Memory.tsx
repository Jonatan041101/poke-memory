'use client';
import { Pokemon } from '@/types/types';
import React from 'react';
import Card from '../Card/Card';
import BackCard from '../BackCard/BackCard';
import useMixCards from '@/hooks/useMixCards';
import Movements from '../Movements/Movements';
import ButtonsActions from '../ButtonsActions/ButtonsActions';
interface Props {
	pokemons: Pokemon[];
}
export default function Memory({ pokemons }: Props) {
	const { poke } = useMixCards(12, false, pokemons);

	return (
		<div className="card__row">
			<Movements />
			<section className="card__all">
				{poke.map((pokemon) => (
					<div className="card__perspective">
						<div className="card__flip">
							<Card pokemon={pokemon} />
							<BackCard />
						</div>
					</div>
				))}
			</section>
			<ButtonsActions />
		</div>
	);
}
