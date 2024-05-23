import type { Config } from 'tailwindcss'
import daisyui from "daisyui"


export default {
  content: ['./index.html','./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [daisyui],
  
} satisfies Config

