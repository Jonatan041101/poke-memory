import { Pokemon } from '@/types/types';
import { create, StateCreator } from 'zustand';

interface MemoryGame {
	countCardsMix: number;
}
interface GamesPokemon {
	pokemons: Pokemon[];
	addPokemonToStore: (pokemons: Pokemon[]) => void;
}

const pokemonsSlice: StateCreator<GamesPokemon> = (set) => ({
	addPokemonToStore: (pokemons) => {
		set(() => ({
			pokemons,
		}));
	},
	pokemons: [],
});
const memorySlice: StateCreator<MemoryGame> = (set) => ({
	countCardsMix: 8,
});
export const useBearStore = create<GamesPokemon & MemoryGame>()((...set) => ({
	...pokemonsSlice(...set),
	...memorySlice(...set),
}));
