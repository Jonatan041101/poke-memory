/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'raw.githubusercontent.com',
				port: '',
				protocol: 'https',
			},
			{
				hostname: 'res.cloudinary.com',
				port: '',
				protocol: 'https',
			},
		],
	},
};

module.exports = nextConfig;
