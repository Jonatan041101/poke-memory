import { OneNotify } from '@/store/notifications';
import { useBearStore } from '@/store/store';
import { ColorsNotification } from '@/types/types';
import React from 'react';

interface Props {
	text: OneNotify;
}

export default function Notification({ text }: Props) {
	const { deleteNotification } = useBearStore((state) => state);

	return (
		<div className="notification__article" onAnimationEnd={deleteNotification}>
			{text.text}
			<div className="notification__load" style={{ background: text.color }}></div>
		</div>
	);
}
