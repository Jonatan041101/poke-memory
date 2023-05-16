import React, { useEffect, useState } from 'react';
import { PropsCounter } from '../ButtonsActions/ButtonsActions';
import Button from '../Button/Button';

type Props = Omit<PropsCounter, 'handlePauseGame'> & {
	children: React.ReactNode;
};

export default function Counter({
	gameOver,
	handleModalLoad,
	handleSave,
	time,
	gameStart,
	endGame,
	gamePause,
	refresh,
	hit,
	timeStorage,
	children,
}: Props) {
	const [counter, setCounter] = useState<number>(timeStorage ?? time);
	useEffect(() => {
		if (refresh) {
			setCounter(() => time);
		}

		if (counter <= 0) {
			gameOver(false);
		}
		if (!refresh && !gamePause && gameStart && !endGame && counter >= 0) {
			const idTime = setTimeout(() => setCounter((counter) => counter - 1), 1000);

			return () => clearTimeout(idTime);
		}
	}, [counter, gameStart, endGame, gamePause, refresh]);
	useEffect(() => {
		if (hit) {
			setCounter((counter) => counter + 2);
		}
	}, [hit]);
	useEffect(() => {
		if (timeStorage) {
			setCounter(() => timeStorage);
		}
	}, [timeStorage]);
	const dasharray = (50 * 2 * 22) / 7;
	const timeRest = (dasharray / time) * counter;

	return (
		<>
			<div className="counter">
				<svg>
					<circle cy={50} cx={50} r={50} className="circle"></circle>
					<circle
						strokeDashoffset={timeRest}
						cy={50}
						cx={50}
						r={50}
						className="circle circle__color"
					></circle>
				</svg>
				<div className="counter__div">{counter}</div>
			</div>
			<div className="counter__buttons">
				{children}
				<div className="button__pause">
					<Button
						handleClick={() => handleSave(counter)}
						text="Guardar"
						icon="Guardar"
					/>
					<Button handleClick={handleModalLoad} text="Cargar" icon="Cargar" />
				</div>
			</div>
		</>
	);
}
