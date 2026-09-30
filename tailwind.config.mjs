/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: '#fef9ef',
        'aged-paper': '#f5eee1',
        'warm-taupe': '#d1c9bf',
        ink: '#2a2b2f',
        charcoal: '#333333',
        graphite: '#515151',
        ash: '#808988',
        accent: '#b05a36',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(44px, 8vw, 80px)', { lineHeight: '0.95' }],
        'display': ['clamp(36px, 5vw, 64px)', { lineHeight: '1' }],
        'heading-lg': ['clamp(32px, 4vw, 45px)', { lineHeight: '1.1' }],
        'heading': ['34px', { lineHeight: '1.15' }],
        'subheading': ['20px', { lineHeight: '1.3', letterSpacing: '-0.46px' }],
        'body-lg': ['18px', { lineHeight: '1.4', letterSpacing: '-0.41px' }],
        'body': ['16px', { lineHeight: '1.5', letterSpacing: '-0.37px' }],
        'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '-0.32px' }],
        'eyebrow': ['12px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'card': '24px',
        'btn': '40px',
        'pill': '9999px',
        'nav': '12px',
      },
      boxShadow: {
        'card': 'rgba(42, 43, 47, 0.1) 12px 32px 80px 0px',
        'glow': 'rgba(0, 0, 0, 0.15) 0px 0px 20px 0px',
      },
      maxWidth: {
        'page': '1280px',
      },
    },
  },
  plugins: [],
};
