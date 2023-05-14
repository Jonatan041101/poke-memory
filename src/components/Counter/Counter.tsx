import React, { useEffect, useState } from 'react';
import { PropsCounter } from '../ButtonsActions/ButtonsActions';

type Props = Omit<PropsCounter, 'handlePauseGame'>;

export default function Counter({
	time,
	gameOver,
	gameStart,
	endGame,
	gamePause,
	refresh,
}: Props) {
	const [counter, setCounter] = useState<number>(time);
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
	const dasharray = (50 * 2 * 22) / 7;
	const timeRest = (dasharray / time) * counter;

	return (
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
	);
}
