/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value:
                            '*',
                    },
                ],
            },
        ]
    },
    reactStrictMode: true,
    images: {
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: ['image/avif', 'image/webp'],
        domains: ['cdn-images-1.medium.com', 'barbaro.online', 'medium.com'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 145, 256, 384],
    },
}

module.exports = nextConfig
