/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/portfolio2' : '',
    assetPrefix: isProd ? '/portfolio2/' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
