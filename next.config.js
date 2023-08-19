/* eslint-disable @typescript-eslint/no-var-requires */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOST_NAME,
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(withBundleAnalyzer(nextConfig));
