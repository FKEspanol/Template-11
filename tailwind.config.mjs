/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },

            colors: {
                primary: "#6c63ff",
                smoke: "#797979",
                dim: "#f3f9fb",
            },
        },
    },
    plugins: [],
};
