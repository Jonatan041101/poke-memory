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

	timeStorage: number | null;
	hit: boolean;
	gameOver: (win: boolean) => void;
	handlePauseGame: () => void;
	handleModalLoad: () => void;
	handleSave: (counter: number) => void;
}
interface Props extends PropsCounter {
	handlePowerAddToCards: () => void;
	handlePowerFlipAll: () => void;
	countFlip: number;
	countTwo: number;
}
export default function ButtonsActions({
	gameOver,
	handlePauseGame,
	handlePowerAddToCards,
	handlePowerFlipAll,
	handleModalLoad,
	handleSave,
	time,
	endGame,
	gameStart,
	gamePause,
	refresh,
	hit,
	timeStorage,
	countFlip,
	countTwo,
}: Props) {
	const powersAddCard = Math.floor(countTwo / 3);

	return (
		<div className="card__buttons">
			<TitleTyping text="Opciones" />
			<div className="buttons">
				<div className="button__pause button__counter">
					<Counter
						timeStorage={timeStorage}
						handleModalLoad={handleModalLoad}
						handleSave={handleSave}
						hit={hit}
						gameOver={gameOver}
						time={time}
						refresh={refresh}
						endGame={endGame}
						gameStart={gameStart}
						gamePause={gamePause}
					>
						<div className="button__pause">
							<Button icon="Pause" text="Pausa" handleClick={handlePauseGame} />
							<Button
								ability={`${countFlip}`}
								icon="Flip"
								text="Volteo"
								handleClick={handlePowerFlipAll}
							/>
							<Button
								ability={`${powersAddCard}`}
								icon="AddCards"
								text="Doble carta"
								handleClick={handlePowerAddToCards}
							/>
						</div>
					</Counter>
				</div>
			</div>
		</div>
	);
}
