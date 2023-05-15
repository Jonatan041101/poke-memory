import { GamesSaved } from '@/types/types';
import React from 'react';
import { Propsload } from '../LoadGame/LoadGame';
interface Props extends Propsload {
	save: GamesSaved;
}

export default function CardLoad({ save, handleLoadGame }: Props) {
	return (
		<article onClick={() => handleLoadGame(save)}>
			{save.date} {save.user}
		</article>
	);
}
