import React from 'react';
import Modal from '../Modal/Modal';
import TitleTyping from '../TitleTyping/TitleTyping';
import ButtonDificulty from '../ButtonDificulty/ButtonDificulty';
import AddNameUser from '../AddNameUser/AddNameUser';
import { NameDificulty } from '@/types/enums';
import ButtonPlay from '../ButtonPlay';
interface Props {
	handleChangeDificulty: (value: NameDificulty) => void;
	handlePlayGame: () => void;
}
export default function ModalMemory({
	handleChangeDificulty,
	handlePlayGame,
}: Props) {
	return (
		<Modal>
			<section className="modal__section">
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
				<ButtonPlay handleClick={handlePlayGame} text="Play" icon="Play" />
			</section>
		</Modal>
	);
}
