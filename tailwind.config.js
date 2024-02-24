/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    letterSpacing: {
      '1': '0.014em',
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      '14': '0.6em',
    },
    content: {
      'radiochecked' : 'url("./../assets/images/icons/checked-icon-white.svg")',
      'maskpattern' : 'url("./../assets/images/mask-pattern.png")',
      'downloadicon' : 'url("./../assets/images/icons/download-icon.svg")',
    },
    fontSize: {
      sm: '0.75rem',
    },
    borderRadius: {
      'sm': '0.375rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      '10': '0.625rem',
      'full': '9999px',
      'large': '12px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.pink')}, ${theme('colors.orange')})`,
      }),
      rotate: {
        '5': '-4deg',
      },
      colors: {
        'btnform': '#E80B5A',
        'pink': '#F80E0E',
        'btnto': '#ED2028',
        'bodyBg': '#F6F6F6',
        'text333': '#333',
        'clF6F6F6': '#F6F6F6',
        'clE5E0E0': '#E5E0E0',
        'cl545357': '#545357',
        'clED2227': '#ED2227',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  variants: {
      extend: {
          backgroundColor: ['label-checked'], // you need add new variant to a property you want to extend
      },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
        addVariant('label-checked', ({ modifySelectors, separator }) => {
            modifySelectors(
                ({ className }) => {
                    const eClassName = e(`label-checked${separator}${className}`); // escape class
                    const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
                    return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
                }
            )
        })
        addVariant('checkbox-checked', ({ modifySelectors, separator }) => {
          modifySelectors(
              ({ className }) => {
                  const eClassName = e(`checkbox-checked${separator}${className}`); // escape class
                  const yourSelector = 'input[type="checkbox"]'; // your input selector. Could be any
                  return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
              }
          )
      })
    }),
    require("tailwindcss-animate")],
}