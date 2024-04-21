/** @type {import('next').NextConfig} */



const nextConfig = {
    images: {
        // domains: ['nextjs.org'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            },
          ],
      },
};

module.exports = nextConfig;
