/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx, ts,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                'layout': '90px minmax(900px, 1fr)',
            }
        },
    },
    plugins: [],
}