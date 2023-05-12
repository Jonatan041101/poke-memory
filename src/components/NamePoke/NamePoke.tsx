import React from 'react';

type Props = {
	name: string;
};

export default function NamePoke({ name }: Props) {
	return <h2 className="text__h2">{name}</h2>;
}
