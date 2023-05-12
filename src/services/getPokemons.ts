import { Pokemon, ResultsAllFetch } from '@/types/types';

export async function getPokemons(): Promise<Pokemon[]> {
  try {
    if (!process.env.NEXT_PUBLIC_API_POKEMON)
      throw new Error(
        'No has indicado una variable de entorno para los pokemons',
      );
    const pokemonsUrl = await fetch(process.env.NEXT_PUBLIC_API_POKEMON);

    const pokemonsUrlParse = (await pokemonsUrl.json()) as ResultsAllFetch;

    const pokemonsUrlFetchToOnePokemon = await Promise.all(
      pokemonsUrlParse.results.map((pokemon) => fetch(pokemon.url)),
    );

    const pokemons = (await Promise.all(
      pokemonsUrlFetchToOnePokemon.map((pokemon) => pokemon.json()),
    )) as Pokemon[];

    return pokemons;
  } catch (error) {
    const err = error as Error;

    throw new Error(err.message);
  }
}
