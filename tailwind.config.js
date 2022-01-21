module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        page: 'calc(100vh - 176px)',
        forMobile: 'calc(100vh - 164px)',
      },
      boxShadow: {
        filter: '0 0 10px rgb(0 0 0 / 15%)',
        sort: '0 1px 5px 2px rgb(0 0 0 / 10%)',
        footbar: '0 -1px 5px rgb(0 0 0 / 10%)',
        card: '0 1px 3px #00000026',
        input: '0 0 0 0.25rem rgb(244 63 94 / 25%)',
      },
      animation: {
        ripple: 'ripple 1s linear infinite',
        toast: 'toastToRight 0.7s',
      },
      keyframes: {
        ripple: {
          '0%': { width: '0', height: '0', opacity: '0.5' },
          '100%': { width: '500px', height: '500px', opacity: '0' },
        },
        toastToRight: {
          from: { transform: 'translateX(100%)' },
          to: { translate: 'translateX(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, addBase }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': { maxWidth: '640px' },
          '@screen md': { maxWidth: '768px' },
          '@screen lg': { maxWidth: '1100px' },
          '@screen xl': { maxWidth: '1250px' },
        },
        '.bg-primary': {
          backgroundColor: 'var(--primary)',
        },
        '.btn-primary': {
          backgroundColor: 'var(--primary)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'var(--primaryDark)',
          },
        },
        '.text-primary': {
          color: 'var(--primary)',
        },
        '.bg-primary-light': {
          backgroundColor: 'var(--primaryLightest)',
        },
        '.border-primary': {
          borderColor: 'var(--primary)',
          boxShadow: '0 0 0 0.25rem var(--primaryLightest)',
        },
      });
      addBase({
        h1: {
          fontSize: '2.25rem',
          fontWeight: '700',
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: '600',
        },
        h3: {
          fontSize: '1.25rem',
          fontWeight: '600',
        },
      });
    },
  ],
};
