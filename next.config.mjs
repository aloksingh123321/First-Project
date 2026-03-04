/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Serve images directly without Next.js optimization.
        // Required on Vercel when gallery images are very large (10–35 MB).
        unoptimized: true,
    },
};

export default nextConfig;
