import { Pokemon } from '@/types/types';
import { create, StateCreator } from 'zustand';

interface Games {
	pokemons: Pokemon[];
	addPokemonToStore: (pokemons: Pokemon[]) => void;
}
const pokemonsSlice: StateCreator<Games> = (set) => ({
	addPokemonToStore: (pokemons) => {
		set(() => ({
			pokemons,
		}));
	},
	pokemons: [],
});

export const useStore = create<Games>()((...set) => ({
	...pokemonsSlice(...set),
}));
