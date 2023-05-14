import React from 'react';
import Modal from '../Modal/Modal';
import TitleTyping from '../TitleTyping/TitleTyping';
import ButtonDificulty from '../ButtonDificulty/ButtonDificulty';
import AddNameUser from '../AddNameUser/AddNameUser';
import { NameDificulty } from '@/types/enums';
import ButtonPlay from '../ButtonPlay';
import Puntaje from '../Puntaje/Puntaje';
interface Props {
	handleChangeDificulty: (value: NameDificulty) => void;
	handlePlayGame: (play: boolean) => void;
	handleReset: (reset: boolean) => void;
	gameOver: boolean;
	playInGame: boolean;
	win: boolean;
	clicks: number;
	asserts: number;
}
export default function ModalMemory({
	handleChangeDificulty,
	handlePlayGame,
	handleReset,
	gameOver,
	win,
	playInGame,
	asserts,
	clicks,
}: Props) {
	return (
		<Modal>
			<section className="modal__section">
				{gameOver && (
					<article>
						{win ? (
							<TitleTyping text="Enhorabuena has ganado" />
						) : (
							<TitleTyping text="Derrota" />
						)}
					</article>
				)}
				{!playInGame && (
					<>
						<TitleTyping text="Selecciona la dificultad" />
						<article className="modal__dificulty">
							<ButtonDificulty
								value={NameDificulty.easy}
								handleClick={handleChangeDificulty}
								text="Facil"
							/>
							<ButtonDificulty
								value={NameDificulty.medium}
								handleClick={handleChangeDificulty}
								text="Medio"
							/>
							<ButtonDificulty
								value={NameDificulty.pro}
								handleClick={handleChangeDificulty}
								text="Dificil"
							/>
						</article>
						<AddNameUser />
					</>
				)}
				{playInGame && <Puntaje assert={asserts} intents={clicks} />}
				{!gameOver && (
					<ButtonPlay handleClick={handlePlayGame} text="Play" icon="Play" />
				)}
				{gameOver && (
					<ButtonPlay text="" icon="Refresh" handleClick={handleReset} />
				)}
			</section>
		</Modal>
	);
}
