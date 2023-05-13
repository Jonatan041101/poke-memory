import { getPokemons } from '@/services/getPokemons';
import Memory from '@/components/Memory/Memory';

export default async function Home() {
	const pokemons = await getPokemons();

	return (
		<main className="main">
			<Memory pokemons={pokemons} />
		</main>
	);
}
