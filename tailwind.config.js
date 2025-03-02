/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1400px',
                },
            },
            colors: {
                background: '#191919',
                white: '#FFFFFF',
                secondary: '#FFD700',
                blue: '#155B82',
                grey: '#F5F5F5',
                black: '#212121',
                navBg: '#1E1E20',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'bg-girl-pearl': "url('/girl-pearl.png')",
            },
            transitionDuration: {
                '300': '300ms',
            },
            boxShadow: {
                'custom': '0px 5px 15px 0px #000',
            },
        },
    },
    plugins: [],
}