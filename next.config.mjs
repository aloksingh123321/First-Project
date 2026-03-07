/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        // Static export cannot use Next.js image optimization.
        unoptimized: true,
    },
    // Trailing slashes help static hosting map /about → /about/index.html
    trailingSlash: true,
};

export default nextConfig;
