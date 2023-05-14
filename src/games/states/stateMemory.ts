import { GamesMemory } from '../types/types';

export const MEMORY_STATE: GamesMemory = {
	nickUser: '',
	countCardsMix: 8,
	countAsserts: 0,
	countClicks: 0,
	countAdd: 0,
	countFlip: 1,
	powerFlipPokemon: [],
	cachePokemon: [],
	assertPokemon: [],
	cacheHistorialOne: null,
	cacheHistorialTwo: null,
	historial: [],
	gameOver: false,
	playGame: false,
	win: false,
	pause: true,
	refresh: false,
};
