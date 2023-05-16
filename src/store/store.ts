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
interface Responsive {
	openTerminal: boolean;
	handleOpenTerminal: () => void;
}
const responsiveSlice: StateCreator<Responsive> = (set) => ({
	openTerminal: false,
	handleOpenTerminal: () => {
		set((state) => ({ openTerminal: !state.openTerminal }));
	},
});
export const useBearStore = create<
	GamesPokemon & UserGame & Notification & Responsive
>()((...set) => ({
	...pokemonsSlice(...set),
	...userSlice(...set),
	...notificationSlice(...set),
	...responsiveSlice(...set),
}));
