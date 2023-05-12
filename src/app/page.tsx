import { getPokemons } from '@/services/getPokemons';
import Memory from '@/components/Memory/Memory';
import BackCard from '@/components/BackCard/BackCard';
export default async function Home() {
	const pokemons = await getPokemons();

	return (
		<main className="main">
			<Memory pokemons={pokemons} />
		</main>
	);
}
