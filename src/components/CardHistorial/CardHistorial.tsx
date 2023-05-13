import { Historial } from '@/games/types/types';
import React from 'react';
import InfoHistorial from '../InfoHistorial/InfoHistorial';

type Props = {
	info: string | Historial;
};

export default function CardHistorial({ info }: Props) {
	return (
		<>{typeof info === 'string' ? <></> : <InfoHistorial historial={info} />}</>
	);
}
