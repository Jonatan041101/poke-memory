import React from 'react';

interface Props {
	children: React.ReactNode;
}

export default function InfoPoke({ children }: Props) {
	return <section className="card__info">{children}</section>;
}
