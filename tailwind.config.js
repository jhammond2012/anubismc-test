module.exports = {
    purge: ["./**/*.html", "./**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "theme-yellow": "#FFD798",
                "theme-yellow-dark": "#E1BC82",
                "theme-red": "#FF6060",
                "theme-brown": "#5E4729",
                "theme-pink": "#D73EE8",
                "theme-pink-dark": "#B735C5",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
