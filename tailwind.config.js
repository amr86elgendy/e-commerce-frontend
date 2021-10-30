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
      colors: {
        star: '#FFDE00',
      },
      minHeight: {
        page: 'calc(100vh - 176px)',
        forMobile: 'calc(100vh - 164px)',
      },
      boxShadow: {
        filter: '0 0 10px rgb(0 0 0 / 15%)',
        sort: '0 1px 5px 2px rgb(0 0 0 / 10%)',
        footbar: '0 -1px 5px rgb(0 0 0 / 10%)',
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
      height: {
        '5px': '5px',
        500: '500px',
        '5rem': '5rem',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
        '200-1fr': '200px 1fr',
        '125-1fr': '125px 1fr',
        '316-1fr3-auto': '316px 1fr 1fr 1fr auto',
        '200-auto-auto': '200px auto auto',
        '75-125': '75px 125px',
        '100-200': '100px 200px',
        '1fr4-auto': '1fr 1fr 1fr 1fr auto',
        '1fr-1fr-100': '1fr 1fr 100px',
        '2fr-1fr': '2fr 1fr',
      },
      gridTemplateRows: {
        75: '75px',
        'auto-auto-auto': 'auto auto auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
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
      });
    },
  ],
};
