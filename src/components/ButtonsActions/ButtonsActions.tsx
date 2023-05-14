import React from 'react';
import TitleTyping from '../TitleTyping/TitleTyping';
import Counter from '../Counter/Counter';
export interface PropsCounter {
	time: number;
	gameStart: boolean;
	endGame: boolean;
	gameOver: (win: boolean) => void;
}
export default function ButtonsActions({
	gameOver,
	time,
	endGame,
	gameStart,
}: PropsCounter) {
	return (
		<div className="card__buttons">
			<TitleTyping text="Buttons Actions" />
			<Counter
				gameOver={gameOver}
				time={time}
				endGame={endGame}
				gameStart={gameStart}
			/>
		</div>
	);
}
