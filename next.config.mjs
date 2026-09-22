/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Garante melhores práticas do React
  compress: true, // Ativa compressão Gzip para melhorar performance

  // Headers para otimizar cache e melhorar carregamento de recursos
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  // Evita carregamento de JS desnecessário para otimizar FCP
  experimental: {
    optimizeCss: true, // Reduz tamanho do CSS
    scrollRestoration: true, // Mantém posição do scroll ao navegar
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com", // Adicione mais domínios se necessário
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
