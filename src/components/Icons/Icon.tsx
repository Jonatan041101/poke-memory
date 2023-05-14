import { IconsTypes } from '@/types/types';
import React from 'react';
import AddCards from './AddCards';
import Flip from './Flip';
import Nice from './Nice';
import Bad from './Bad';
import Play from './Play';
import Pause from './Pause';
import Refresh from './Refresh';

type Props = {
	nameIcon: IconsTypes;
};

export default function Icon({ nameIcon }: Props) {
	return (
		<>
			{nameIcon === 'AddCards' && <AddCards />}
			{nameIcon === 'Flip' && <Flip />}
			{nameIcon === 'Nice' && <Nice />}
			{nameIcon === 'Bad' && <Bad />}
			{nameIcon === 'Play' && <Play />}
			{nameIcon === 'Pause' && <Pause />}
			{nameIcon === 'Refresh' && <Refresh />}
		</>
	);
}
