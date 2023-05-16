// import { useBearStore } from '@/store/store';
import React from 'react';
import Notification from './Notification/Notification';
import { useBearStore } from '@/store/store';

export default function AlertModal() {
	const { notification } = useBearStore((state) => state);

	return (
		<section className="notification">
			{notification.map((text, index) => (
				<Notification text={text} key={`${text}-${index}`} />
			))}
		</section>
	);
}
