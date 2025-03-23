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
          primary: '#4F46E5', // Indigo 600 - vibrant but accessible primary
          'primary-content': '#FFFFFF',
          secondary: '#0EA5E9', // Sky 500 - complementary blue tone
          'secondary-content': '#FFFFFF',
          accent: '#10B981', // Emerald 500 - fresh green accent
          'accent-content': '#FFFFFF',
          neutral: '#3D4451', // Slate gray for neutral elements
          'neutral-content': '#FFFFFF',
          'base-100': '#F8FAFC', // Slate 50 - soft off-white for main background
          'base-200': '#F1F5F9', // Slate 100 - slightly darker for alternating sections
          'base-300': '#E2E8F0', // Slate 200 - subtle borders and separators
          'base-content': '#334155', // Slate 700 - softer than black for main text
          info: '#3ABFF8', // Bright blue for information
          'info-content': '#002B3D',
          success: '#36D399', // Green for success states
          'success-content': '#003320',
          warning: '#FBBD23', // Amber for warnings
          'warning-content': '#382800',
          error: '#F87272', // Red for errors
          'error-content': '#FFFFFF',
        },
        dark: {
          'color-scheme': 'dark',
          primary: '#818CF8', // Indigo 400 - lighter indigo for dark mode
          'primary-content': '#1E1B4B', // Dark indigo for text on primary
          secondary: '#38BDF8', // Sky 400 - brighter blue for dark mode
          'secondary-content': '#0C4A6E',
          accent: '#34D399', // Emerald 400 - brighter green
          'accent-content': '#064E3B',
          neutral: '#2A323C', // Dark slate for neutral elements
          'neutral-content': '#D1D5DB',
          'base-100': '#1E293B', // Slate 800 - primary dark background (softer than pure black)
          'base-200': '#0F172A', // Slate 900 - darker sections
          'base-300': '#020617', // Slate 950 - deepest background for cards/borders
          'base-content': '#E2E8F0', // Slate 200 - light gray for text (not harsh white)
          info: '#0EA5E9', // Sky 500 - info color
          'info-content': '#E0F2FE',
          success: '#22C55E', // Green 500 - success color
          'success-content': '#DCFCE7',
          warning: '#F59E0B', // Amber 500 - warning color
          'warning-content': '#FEF3C7',
          error: '#EF4444', // Red 500 - error color
          'error-content': '#FEE2E2',
        },
      },
    ],
  },
};
