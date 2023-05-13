import { ActionMemory, GamesMemory, Historial } from '../types/types';

export default function reducerMemory(
	state: GamesMemory,
	action: ActionMemory,
) {
	switch (action.type) {
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
		default:
			return state;
	}
	return state;
}
