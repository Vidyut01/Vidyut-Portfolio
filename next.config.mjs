/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'user-images.githubusercontent.com',
            port: '',
            pathname: '/**',
            },
            {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/marwin1991/profile-technology-icons/assets/**',
            },
        ],
    },
};

export default nextConfig;
