import React from 'react';
import SpanText from '../SpanText/SpanText';

type Props = {
	name: string;
	info: string;
};

export default function TextInfo({ info, name }: Props) {
	return (
		<p className="text">
			<SpanText colorText="white" text={name} />
			<SpanText colorText="yellow" text={info} title />
		</p>
	);
}
