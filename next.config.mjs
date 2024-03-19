/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cnnespanol.cnn.com"], // 許可する外部画像ソースのドメインを追加
  },
};

export default nextConfig;
