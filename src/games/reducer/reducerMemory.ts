import { NameDificulty } from '@/types/enums';
import { ActionMemory, GamesMemory, Historial } from '../types/types';

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
			};
		}
		case 'memory/add':
			if (state.cacheHistorialOne) {
				return {
					...state,
					cachePokemon: [...state.cachePokemon, action.payload.index],
					cacheHistorialTwo: action.payload.historial,
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
			};
		}
		default:
			return state;
	}
}
