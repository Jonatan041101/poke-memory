import { NameDificulty } from '@/types/enums';

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
	cachePokemon: number[];
	assertPokemon: number[];
	cacheHistorialOne: PokeHistorial | null;
	cacheHistorialTwo: PokeHistorial | null;
	historial: (Historial | string)[]; //Editar para tambine poner strings para mostrar los dobles hits
	playGame: boolean;
	gameOver: boolean;
	win: boolean;
	nickUser: string;
}
type ActionMemory =
	| { type: 'memory/add'; payload: PayloadAdd }
	| { type: 'memory/compare'; payload: boolean }
	| { type: 'memory/change-dificulty'; payload: NameDificulty }
	| { type: 'memory/play'; payload: PlayGame }
	| { type: 'memory/gameover-result'; payload: boolean };
