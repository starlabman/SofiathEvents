import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette mariage haut de gamme
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        cream: {
          50: '#FEFEFE',
          100: '#FDFCFA',
          200: '#FAF8F3',
          300: '#F5F2E9',
          400: '#EDE8D8',
          500: '#E2DBC7',
          600: '#D4C9B0',
          700: '#C2B494',
          800: '#A99A7A',
          900: '#8B7A5F',
        },
        rose: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        sage: {
          50: '#F6F7F6',
          100: '#E3E7E3',
          200: '#C7D0C7',
          300: '#A3B3A3',
          400: '#7A907A',
          500: '#5A735A',
          600: '#465A46',
          700: '#374737',
          800: '#2D392D',
          900: '#252F25',
        },
        // Couleurs principales
        primary: "#F59E0B", // Gold principal
        secondary: "#E2DBC7", // Cream
        accent: "#EC4899", // Rose pastel
        dark: "#2D392D", // Sage foncé
        light: "#FDFCFA", // Cream clair
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #FEFEFE 0%, #FDFCFA 50%, #FAF8F3 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #FCD34D 100%)',
        'gradient-rose': 'linear-gradient(135deg, #EC4899 0%, #F472B6 50%, #F9A8D4 100%)',
        'pattern-dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(245, 158, 11, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
