import { Pokemon } from '@/types/types';
import { create, StateCreator } from 'zustand';
import { UserGame, userSlice } from './slices/user';
import { Notification, notificationSlice } from './notifications';

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

export const useBearStore = create<GamesPokemon & UserGame & Notification>()(
	(...set) => ({
		...pokemonsSlice(...set),
		...userSlice(...set),
		...notificationSlice(...set),
	}),
);
