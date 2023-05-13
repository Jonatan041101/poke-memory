'use client';
import { Pokemon } from '@/types/types';
import React, { useEffect, useReducer } from 'react';
import useMixCards from '@/hooks/useMixCards';
import Movements from '../Movements/Movements';
import ButtonsActions from '../ButtonsActions/ButtonsActions';
import { MEMORY_STATE } from '@/games/states/stateMemory';
import reducerMemory from '@/games/reducer/reducerMemory';
import Card from '../Card/Card';
import { comparePokemon } from '@/utils/actionsMemory/actionsMemory';

interface Props {
	pokemons: Pokemon[];
}
export default function Memory({ pokemons }: Props) {
	const [state, dispatch] = useReducer(reducerMemory, MEMORY_STATE);
	const { poke } = useMixCards(state.countCardsMix, false, pokemons);
	useEffect(() => {
		if (state.cachePokemon.length >= 2) {
			const result = comparePokemon(
				poke[state.cachePokemon[0]],
				poke[state.cachePokemon[1]],
			);
			const idTime = setTimeout(
				() => dispatch({ type: 'memory/compare', payload: result }),
				500,
			);
			return () => clearTimeout(idTime);
		}
	}, [state.cachePokemon]);
	const handleAddCachePokemon = (index: number, pokemon: Pokemon) => {
		if (state.cachePokemon.includes(index)) {
			// Puedo retornar un mensaje
			return;
		}
		if (state.cachePokemon.length < 2) {
			dispatch({
				type: 'memory/add',
				payload: {
					index,
					historial: {
						image: String(pokemon.sprites.other?.dream_world.front_default),
						name: pokemon.name,
					},
				},
			});
		}
	};
	console.log({ state });

	return (
		<div className="card__row">
			<Movements historial={state.historial} />
			<section className="card__all">
				{poke.map((pokemon, index) => (
					<Card
						handleAddCachePokemon={handleAddCachePokemon}
						index={index}
						pokemon={pokemon}
						pokemonInCache={state.cachePokemon}
						pokemonAssert={state.assertPokemon}
					/>
				))}
			</section>
			<ButtonsActions />
		</div>
	);
}
