/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '',
				port: '',
				protocol: 'https',
			},
		],
	},
};

module.exports = nextConfig;
