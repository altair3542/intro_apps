module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Activar modo oscuro basado en clases
  theme: {
    extend: {
      colors: {
        darkPrimary: '#00796B', // Dark primary color
        lightPrimary: '#B2DFDB', // Light primary color
        primary: '#009688', // Primary color
        accent: '#607D8B', // Accent color
        textPrimary: '#212121', // Primary text
        textSecondary: '#757575', // Secondary text
        divider: '#BDBDBD', // Divider color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
