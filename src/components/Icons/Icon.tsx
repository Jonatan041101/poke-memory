import { IconsTypes } from '@/types/types';
import React from 'react';
import AddCards from './AddCards';
import Flip from './Flip';

type Props = {
	nameIcon: IconsTypes;
};

export default function Icon({ nameIcon }: Props) {
	return (
		<>
			{nameIcon === 'AddCards' && <AddCards />}
			{nameIcon === 'Flip' && <Flip />}
		</>
	);
}
