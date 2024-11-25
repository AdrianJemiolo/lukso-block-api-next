

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    async redirects(){
        return [
            {
                source:"/",
                destination:"/api/block-number",
                permanent:true,
            },
        ];
    },
};

export default nextConfig;
