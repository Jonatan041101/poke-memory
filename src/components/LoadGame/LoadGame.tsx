import React from 'react';
import Modal from '../Modal/Modal';
import { parseDates } from '../Memory/Memory';
import CardLoad from '../CardLoad/CardLoad';
import Icon from '../Icons/Icon';
import { GamesSaved } from '@/types/types';

export interface Propsload {
	handleLoadGame: (game: GamesSaved) => void;
}
interface Props extends Propsload {
	modalLoad: (open: boolean) => void;
}
export default function LoadGame({ handleLoadGame, modalLoad }: Props) {
	const games = parseDates();

	return (
		<Modal>
			<div className="modal__section modal__loads">
				<i className="modal__close" onClick={() => modalLoad(false)}>
					<Icon nameIcon="Close" />
				</i>
				<section className="saves">
					{games.map((save, index) => (
						<CardLoad
							key={`${JSON.stringify(save)}-${index}`}
							save={save}
							handleLoadGame={handleLoadGame}
						/>
					))}
				</section>
			</div>
		</Modal>
	);
}
