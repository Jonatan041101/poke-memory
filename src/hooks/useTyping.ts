import React, { useEffect, useState } from 'react';

export default function useTyping(text: string, image?: string) {
	const [typing, setTyping] = useState<string>('');
	const [lengthText, setLengthText] = useState<number>(1);
	const [imageT, setImageT] = useState<string>('');
	useEffect(() => {
		const idTime = setTimeout(() => {
			setTyping(() => text.slice(0, lengthText));
			if (lengthText <= text.length) {
				setLengthText((counter) => counter + 1);
			} else {
				setImageT(() => (image ? image : ''));
			}
		}, 60);
		return () => clearTimeout(idTime);
	}, [typing]);
	return { typing, imageT };
}
