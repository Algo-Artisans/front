const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        hostname: 'moraktest-bucket.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
};

export default nextConfig;
