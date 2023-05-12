export type TextColors = 'white' | 'yellow';

export type Props = {
	text: string;
	colorText: TextColors;
	title?: boolean;
};

export interface Colors {
	[key: string]: string;
}
