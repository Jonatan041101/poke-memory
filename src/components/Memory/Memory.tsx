'use client';
import { GamesSaved, Pokemon } from '@/types/types';
import React, { useEffect, useReducer } from 'react';
import useMixCards from '@/hooks/useMixCards';
import Movements from '../Movements/Movements';
import ButtonsActions from '../ButtonsActions/ButtonsActions';
import { MEMORY_STATE } from '@/games/states/stateMemory';
import reducerMemory from '@/games/reducer/reducerMemory';
import Card from '../Card/Card';
import { comparePokemon } from '@/utils/actionsMemory/actionsMemory';
import TitleTyping from '../TitleTyping/TitleTyping';
import ModalMemory from '../ModalMemory/ModalMemory';
import { NameDificulty } from '@/types/enums';
import { useBearStore } from '@/store/store';
import { GamesMemory, PokemonIndex } from '@/games/types/types';
import LoadingHome from '../LoadingHome/LoadingHome';
import LoadGame from '../LoadGame/LoadGame';

interface Props {
	pokemons: Pokemon[];
}
export const parseDates = () => {
	const games = window.localStorage.getItem('Jonh');
	if (games) {
		const gameJson = JSON.parse(games);
		return gameJson as GamesSaved[];
	}
	return [];
};
export default function Memory({ pokemons }: Props) {
	const [state, dispatch] = useReducer(reducerMemory, MEMORY_STATE);
	const { userName, changeName } = useBearStore((state) => state);
	const { poke } = useMixCards(
		state.countCardsMix,
		false,
		pokemons,
		state.pokemonStorage,
	);
	const handleGameOver = (win: boolean) => {
		dispatch({ type: 'memory/gameover-result', payload: win });
	};
	console.log({ poke, state });

	useEffect(() => {
		if (state.hit) {
			const idTime = setTimeout(() => dispatch({ type: 'memory/hit-off' }), 100);
			return () => clearTimeout(idTime);
		}
		if (state.assertPokemon.length === state.countCardsMix * 2) {
			handleGameOver(true);
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
		if (state.powerFlipPokemon.length > 0) {
			const idTime = setTimeout(() => dispatch({ type: 'memory/flip-off' }), 500);
			return () => clearTimeout(idTime);
		}
	}, [
		state.cachePokemon,
		state.assertPokemon,
		state.powerFlipPokemon,
		state.hit,
	]);
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
	const handlePlayGame = (play: boolean) => {
		if (userName.length > 1) {
			dispatch({
				type: 'memory/play',
				payload: {
					inPlay: play,
					name: userName,
				},
			});
		}
	};
	const handlePauseGame = () => {
		dispatch({ type: 'memory/pause', payload: true });
	};
	const handlePowerAddToCards = () => {
		if (state.countAdd % 3 >= 1) {
		}
		if (!state.pause) {
			const pokemonsIndex: PokemonIndex[] = poke.map(({ name }, index) => ({
				name,
				index,
			}));

			dispatch({ type: 'memory/doble-card', payload: pokemonsIndex });
		}
	};
	const handlePowerFlipAll = () => {
		if (!state.pause) {
			dispatch({ type: 'memory/flip' });
		}
	};
	const handleReset = (reset: boolean) => {
		dispatch({ type: 'memory/reset', payload: reset });
	};
	const handleSave = (counter: number) => {
		const games = parseDates();
		const stateStorage: GamesMemory = {
			...state,
			pokemonStorage: poke,
			timeStorage: counter,
		};
		const gameSave: GamesSaved = {
			game: stateStorage,
			date: new Date().toLocaleDateString('es', {
				day: 'numeric',
				month: 'long',
				year: 'numeric',
			}),
			user: userName,
		};
		window.localStorage.setItem('Jonh', JSON.stringify([...games, gameSave]));
	};
	const modalLoad = (open: boolean) => {
		dispatch({ type: 'memory/modal-load', payload: open });
	};
	const handleModalLoad = () => {
		modalLoad(true);
	};
	const handleLoadGame = (game: GamesSaved) => {
		dispatch({ type: 'memory/load', payload: game.game });
		changeName(game.user);
	};
	return (
		<div className="card__row">
			{poke.length > 0 ? (
				<>
					<Movements historial={state.historial} />
					<div className="">
						<TitleTyping text="Juego de Memoria Pokemon" />
						<section className="card__all">
							{state.pause && (
								<ModalMemory
									handleChangeDificulty={handleChangeDificulty}
									handlePlayGame={handlePlayGame}
									handleReset={handleReset}
									gameOver={state.gameOver}
									win={state.win}
									playInGame={state.playGame}
									asserts={state.countAsserts}
									clicks={state.countClicks}
								/>
							)}
							{state.load && (
								<LoadGame handleLoadGame={handleLoadGame} modalLoad={modalLoad} />
							)}
							{poke.map((pokemon, index) => (
								<Card
									key={`${pokemon.id}-${index}`}
									handleAddCachePokemon={handleAddCachePokemon}
									index={index}
									pokemon={pokemon}
									pokemonFlip={state.powerFlipPokemon}
									pokemonInCache={state.cachePokemon}
									pokemonAssert={state.assertPokemon}
								/>
							))}
						</section>
					</div>
					<ButtonsActions
						time={60}
						timeStorage={state.timeStorage}
						handlePauseGame={handlePauseGame}
						gameOver={handleGameOver}
						handlePowerAddToCards={handlePowerAddToCards}
						handlePowerFlipAll={handlePowerFlipAll}
						endGame={state.gameOver}
						gameStart={state.playGame}
						gamePause={state.pause}
						refresh={state.refresh}
						hit={state.hit}
						handleSave={handleSave}
						handleModalLoad={handleModalLoad}
					/>
				</>
			) : (
				<LoadingHome />
			)}
		</div>
	);
}
