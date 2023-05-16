import { Pokemon } from '@/types/types';

export const comparePokemon = (pokemonOne: Pokemon, pokemonTwo: Pokemon) => {
	if (pokemonOne.name === pokemonTwo.name) {
		return true;
	}
	return false;
};
