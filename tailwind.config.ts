import type { Config } from 'tailwindcss'
import daisyui from "./node_modules/daisyui"


export default {
  content: ['./index.html','./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  
} satisfies Config

