/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slideInRight: {
                    "0%": { transform: "translateX(100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideOutRight: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(100%)", opacity: "0" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            animation: {
                slideInRight: "slideInRight 0.5s ease-out ",
                slideOutRight: "slideOutRight 0.5s ease-out ",
                slideDown: "slideDown 1s ",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
