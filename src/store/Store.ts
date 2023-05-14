import { Pokemon } from '@/types/types';
import { create, StateCreator } from 'zustand';

interface MemoryGame {
	countCardsMix: number;
}
interface GamesPokemon {
	pokemons: Pokemon[];
	addPokemonToStore: (pokemons: Pokemon[]) => void;
}
interface UserGame {
	userName: string;
	changeName: (name: string) => void;
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
const userSlice: StateCreator<UserGame> = (set) => ({
	userName: '',
	changeName: (name) => {
		return set((state) => ({
			...state,
			userName: name,
		}));
	},
});

export const useBearStore = create<GamesPokemon & MemoryGame & UserGame>()(
	(...set) => ({
		...pokemonsSlice(...set),
		...memorySlice(...set),
		...userSlice(...set),
	}),
);
