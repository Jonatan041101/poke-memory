import React from 'react';
import { Colors, Props } from './types';

const colors: Colors = {
	white: '#fff',
	yellow: '#f7ba15',
};

export default function SpanText({ text, colorText, title }: Props) {
	const color = colors[colorText];
	return (
		<span
			style={{ color }}
			className={!title ? 'span__subtitle span' : 'span__text span'}
		>
			{text}
		</span>
	);
}
