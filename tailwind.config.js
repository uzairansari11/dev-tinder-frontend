// tailwind.config.js

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        light: {
          'color-scheme': 'light',
          primary: 'oklch(55% 0.3 240)',
          'primary-content': 'oklch(98% 0.01 240)',
          secondary: 'oklch(70% 0.25 200)',
          'secondary-content': 'oklch(98% 0.01 200)',
          accent: 'oklch(65% 0.25 160)',
          'accent-content': 'oklch(98% 0.01 160)',
          neutral: 'oklch(50% 0.05 240)',
          'neutral-content': 'oklch(98% 0.01 240)',
          'base-100': 'oklch(98% 0.02 240)',
          'base-200': 'oklch(95% 0.03 240)',
          'base-300': 'oklch(92% 0.04 240)',
          'base-content': 'oklch(20% 0.05 240)',
          // Add other light theme values
        },
        dark: {
          'color-scheme': 'dark',
          primary: 'oklch(55% 0.3 240)',
          'primary-content': 'oklch(98% 0.01 240)',
          secondary: 'oklch(70% 0.25 200)',
          'secondary-content': 'oklch(98% 0.01 200)',
          accent: 'oklch(65% 0.25 160)',
          'accent-content': 'oklch(98% 0.01 160)',
          neutral: 'oklch(50% 0.05 240)',
          'neutral-content': 'oklch(98% 0.01 240)',
          'base-100': 'oklch(20% 0.02 240)',
          'base-200': 'oklch(15% 0.03 240)',
          'base-300': 'oklch(10% 0.04 240)',
          'base-content': 'oklch(90% 0.05 240)',
          // Add other dark theme values
        },
      },
    ],
  },
};
