import './globals.css';
import '../css/main.css';
export const metadata = {
	title: 'Poke-Memory',
	description: 'Juega a la memoria como nunca antes la habias visto.',
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
