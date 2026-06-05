/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        fg: '#111111',
        'fg-muted': '#555555',
        accent: {
          cobalt:    '#1B4FE8', // 코발트블루
          vermilion: '#E8361B', // 버밀리온
          lime:      '#5EC41A', // 라임
          mustard:   '#D9980D', // 머스타드
          lavender:  '#7C3AED', // 라벤더
        },
      },

      fontFamily: {
        // Pretendard: 한/영 모두 커버, 헤드라인·본문 통일
        sans:    ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
        display: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },

      maxWidth: {
        site: '1440px',
      },

      fontSize: {
        // clamp: 모바일~데스크탑 유동 스케일
        'display-xl': ['clamp(3rem, 8vw, 6.5rem)',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)',    { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.4rem, 3vw, 2.2rem)',{ lineHeight: '1.1',  letterSpacing: '-0.015em' }],
      },

      transitionDuration: {
        DEFAULT: '200ms',
        slow: '300ms',
      },

      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0, 0, 1)',
      },

      gridTemplateColumns: {
        // 12-column layout
        12: 'repeat(12, minmax(0, 1fr))',
        // project card grids
        'cards-3': 'repeat(3, minmax(0, 1fr))',
        'cards-2': 'repeat(2, minmax(0, 1fr))',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
