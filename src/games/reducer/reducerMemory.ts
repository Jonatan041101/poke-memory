import { NameDificulty } from '@/types/enums';
import {
	ActionMemory,
	GamesMemory,
	Historial,
	PokemonIndex,
} from '../types/types';
import { MEMORY_STATE } from '../states/stateMemory';

const searchPokemonRandom = (pokemons: PokemonIndex[]) => {
	const randomPokemon = Math.floor(Math.random() * pokemons.length);
	const idsCard: number[] = [];

	pokemons.forEach((pokemon) => {
		if (pokemons[randomPokemon].name === pokemon.name) {
			idsCard.push(pokemon.index);
		}
	});
	if (idsCard.length === 2) {
		return idsCard;
	}

	return undefined;
};

export default function reducerMemory(
	state: GamesMemory,
	action: ActionMemory,
) {
	switch (action.type) {
		case 'memory/play': {
			return {
				...state,
				playGame: action.payload.inPlay,
				nickUser: action.payload.name,
				pause: false,
				refresh: false,
			};
		}
		case 'memory/doble-card': {
			const allIndex = [...state.assertPokemon, ...state.cachePokemon];

			const resultsPokemonsDontFlip = action.payload.filter(
				({ index }) => !allIndex.includes(index),
			);

			let results = searchPokemonRandom(resultsPokemonsDontFlip);
			while (results === undefined) {
				results = searchPokemonRandom(resultsPokemonsDontFlip);
			}
			return {
				...state,
				assertPokemon: [...state.assertPokemon, ...results],
				countPowerTwoCards: state.countAdd - 3,
			};
		}

		case 'memory/flip': {
			return {
				...state,
				powerFlipPokemon: Array.from(
					{ length: state.countCardsMix * 2 },
					(_, i) => i,
				),
			};
		}
		case 'memory/flip-off': {
			return {
				...state,
				powerFlipPokemon: [],
			};
		}
		case 'memory/add':
			if (state.cacheHistorialOne) {
				return {
					...state,
					cachePokemon: [...state.cachePokemon, action.payload.index],
					cacheHistorialTwo: action.payload.historial,
					countClicks: state.countClicks + 1,
				};
			}
			return {
				...state,
				cachePokemon: [...state.cachePokemon, action.payload.index],
				cacheHistorialOne: action.payload.historial,
			};
		case 'memory/compare': {
			const addHistorial: Historial = {
				assert: action.payload,
				first: state.cacheHistorialOne,
				second: state.cacheHistorialTwo,
				time: new Date(),
			};
			if (action.payload) {
				const saveCache = [...state.cachePokemon];
				return {
					...state,
					assertPokemon: [...state.assertPokemon, ...saveCache],
					cachePokemon: [],
					historial: [...state.historial, addHistorial],
					cacheHistorialOne: null,
					cacheHistorialTwo: null,
					countAsserts: state.countAsserts + 1,
				};
			}
			return {
				...state,
				cachePokemon: [],
				historial: [...state.historial, addHistorial],
				cacheHistorialOne: null,
				cacheHistorialTwo: null,
			};
		}
		case 'memory/change-dificulty': {
			if (action.payload === NameDificulty.easy) {
				return {
					...state,
					countCardsMix: 8,
				};
			}
			if (action.payload === NameDificulty.medium) {
				return {
					...state,
					countCardsMix: 12,
				};
			}
			if (action.payload === NameDificulty.pro) {
				return {
					...state,
					countCardsMix: 14,
				};
			}
			return state;
		}
		case 'memory/gameover-result': {
			return {
				...state,
				gameOver: true,
				win: action.payload,
				pause: true,
			};
		}
		case 'memory/pause': {
			return {
				...state,
				pause: action.payload,
			};
		}
		case 'memory/reset': {
			return {
				...MEMORY_STATE,
				refresh: true,
			};
		}
		default:
			return state;
	}
}
