/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#94248a",
                primaryDark: "#821f79",
                secondary: "#004c91",
                secondaryDark: "#003d75"
            }
        }
    },
    plugins: []
};
