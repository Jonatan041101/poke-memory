import { useEffect } from "react";
import { Pokemon, ResultsAllFetch } from "@/types/types";
import { useAppDispatch } from "@/store/hooks";
import {
  createPokemonClassic,
  getPokemonsStore,
} from "@/store/reducer/pokemon";
import { viewError } from "@/store/reducer/error";
import { AppDispatch } from "@/store/store";

export default function usePokemon() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getPokemon = () => {
      return async (dispatch: AppDispatch) => {
        try {
          if (!process.env.NEXT_PUBLIC_API_POKEMON)
            throw new Error("Por favor coloque la variable de entorno");

          const res = await fetch(process.env.NEXT_PUBLIC_API_POKEMON);

          const data = (await res.json()) as ResultsAllFetch;

          const fethcToAllPokemons = data.results.map(({ url }) => fetch(url));

          const pokemons = await Promise.all(fethcToAllPokemons);

          const dataPokemons = (await Promise.all(
            pokemons.map(pokemon => pokemon.json()),
          )) as Pokemon[];
          dispatch(getPokemonsStore(dataPokemons));
          dispatch(createPokemonClassic());
        } catch (error) {
          const newError = error as Error;

          dispatch(viewError(newError.message));
        }
      };
    };
    dispatch(getPokemon());
  }, []);
}
