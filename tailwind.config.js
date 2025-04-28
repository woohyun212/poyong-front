/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f0fdf9',
          100: '#ccfbef',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          800: '#854d0e',
        },
        red: {
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          800: '#991b1b',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Noto Sans KR',
          'system-ui',
          'sans-serif'
        ],
      },
    },
  },
  // TailwindCSS 4.0에서는 plugins 배열이 필요 없을 수 있지만,
  // 향후 플러그인 추가를 위해 빈 배열로 유지
  plugins: [],
}