import React from 'react';
import TitleTyping from '../TitleTyping/TitleTyping';

type Props = {
	intents: number;
	assert: number;
};

export default function Puntaje({ assert, intents }: Props) {
	console.log({ assert, intents });

	return (
		<article className="puntaje">
			<TitleTyping text="Resultados" />
			<TitleTyping text={`Intentos: ${intents}`} />
			<TitleTyping text={`Aciertos: ${assert}`} />
			<TitleTyping text={`Puntaje: ${(100 * assert) / intents}`} />
		</article>
	);
}
