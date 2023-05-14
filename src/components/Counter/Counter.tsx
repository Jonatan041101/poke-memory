import React, { useEffect, useState } from 'react';
import { PropsCounter } from '../ButtonsActions/ButtonsActions';

export default function Counter({
	time,
	gameOver,
	gameStart,
	endGame,
}: PropsCounter) {
	console.log({ gameStart, endGame });

	const [counter, setCounter] = useState<number>(time);
	useEffect(() => {
		if (counter <= 0) {
			gameOver(false);
		}
		if (gameStart && !endGame && counter >= 0) {
			const idTime = setTimeout(() => setCounter((counter) => counter - 1), 1000);

			return () => clearTimeout(idTime);
		}
	}, [counter, gameStart, endGame]);
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
