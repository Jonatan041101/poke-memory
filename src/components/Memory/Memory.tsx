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
import TitleTyping from '../TitleTyping/TitleTyping';
import Modal from '../Modal/Modal';
import ModalMemory from '../ModalMemory/ModalMemory';
import { NameDificulty } from '@/types/enums';
import { useBearStore } from '@/store/store';
import ModalPause from '../ModalGameOver/ModalPause';

interface Props {
	pokemons: Pokemon[];
}
export default function Memory({ pokemons }: Props) {
	const [state, dispatch] = useReducer(reducerMemory, MEMORY_STATE);
	const { userName } = useBearStore((state) => state);
	const { poke } = useMixCards(state.countCardsMix, false, pokemons);
	const handleGameOver = (win: boolean) => {
		dispatch({ type: 'memory/gameover-result', payload: win });
	};
	useEffect(() => {
		if (state.assertPokemon.length === state.countCardsMix * 2) {
			handleGameOver(true);
			console.log('Ganaste');
		}
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
	}, [state.cachePokemon, state.assertPokemon]);
	const handleAddCachePokemon = (index: number, pokemon: Pokemon) => {
		if (
			state.cachePokemon.includes(index) ||
			state.assertPokemon.includes(index)
		) {
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
	const handleChangeDificulty = (dificulty: NameDificulty) => {
		dispatch({ type: 'memory/change-dificulty', payload: dificulty });
	};
	const handlePlayGame = () => {
		if (userName.length > 1) {
			dispatch({
				type: 'memory/play',
				payload: {
					inPlay: true,
					name: userName,
				},
			});
		}
	};
	return (
		<div className="card__row">
			<Movements historial={state.historial} />
			<div className="">
				<TitleTyping text="Juego de Memoria Pokemon" />
				<section className="card__all">
					{!state.playGame && (
						<ModalMemory
							handleChangeDificulty={handleChangeDificulty}
							handlePlayGame={handlePlayGame}
						/>
					)}
					{state.gameOver && <ModalPause />}
					{poke.map((pokemon, index) => (
						<Card
							key={`${pokemon.id}-${index}`}
							handleAddCachePokemon={handleAddCachePokemon}
							index={index}
							pokemon={pokemon}
							pokemonInCache={state.cachePokemon}
							pokemonAssert={state.assertPokemon}
						/>
					))}
				</section>
			</div>
			<ButtonsActions
				time={15}
				gameOver={handleGameOver}
				endGame={state.gameOver}
				gameStart={state.playGame}
			/>
		</div>
	);
}
