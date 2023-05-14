import { NameDificulty } from '@/types/enums';
export interface PokemonIndex {
	name: string;
	index: number;
}
interface PokeHistorial {
	name: string;
	image: string;
}
export interface Historial {
	first: PokeHistorial | null;
	assert: boolean;
	second: PokeHistorial | null;
	time: Date;
}
interface PayloadAdd {
	index: number;
	historial: PokeHistorial;
}
interface PlayGame {
	inPlay: boolean;
	name: string;
}
export interface GamesMemory {
	countCardsMix: number;
	countClicks: number;
	countAsserts: number;
	countFlip: number;
	countAdd: number;
	cachePokemon: number[];
	assertPokemon: number[];
	powerFlipPokemon: number[];
	cacheHistorialOne: PokeHistorial | null;
	cacheHistorialTwo: PokeHistorial | null;
	historial: (Historial | string)[]; //Editar para tambine poner strings para mostrar los dobles hits
	playGame: boolean;
	gameOver: boolean;
	win: boolean;
	nickUser: string;
	pause: boolean;
	refresh: boolean;
}
type ActionMemory =
	| { type: 'memory/add'; payload: PayloadAdd }
	| { type: 'memory/compare'; payload: boolean }
	| { type: 'memory/change-dificulty'; payload: NameDificulty }
	| { type: 'memory/play'; payload: PlayGame }
	| { type: 'memory/gameover-result'; payload: boolean }
	| { type: 'memory/pause'; payload: boolean }
	| { type: 'memory/flip' }
	| { type: 'memory/flip-off' }
	| { type: 'memory/doble-card'; payload: PokemonIndex[] }
	| { type: 'memory/reset'; payload: boolean };
