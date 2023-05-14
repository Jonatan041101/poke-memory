import React from 'react';
import TitleTyping from '../TitleTyping/TitleTyping';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';
export interface PropsCounter {
	time: number;
	gameStart: boolean;
	endGame: boolean;
	gamePause: boolean;
	refresh: boolean;
	gameOver: (win: boolean) => void;
	handlePauseGame: () => void;
}
interface Props extends PropsCounter {
	handlePowerAddToCards: () => void;
	handlePowerFlipAll: () => void;
}
export default function ButtonsActions({
	gameOver,
	handlePauseGame,
	handlePowerAddToCards,
	handlePowerFlipAll,
	time,
	endGame,
	gameStart,
	gamePause,
	refresh,
}: Props) {
	return (
		<div className="card__buttons">
			<TitleTyping text="Buttons Actions" />
			<div className="buttons">
				<Counter
					gameOver={gameOver}
					time={time}
					refresh={refresh}
					endGame={endGame}
					gameStart={gameStart}
					gamePause={gamePause}
				/>
				<div className="button__pause">
					<Button icon="Pause" text="Pausa" handleClick={handlePauseGame} />
					<Button icon="Flip" text="Volteo" handleClick={handlePowerFlipAll} />
					<Button
						icon="AddCards"
						text="Doble carta"
						handleClick={handlePowerAddToCards}
					/>
				</div>
			</div>
		</div>
	);
}
