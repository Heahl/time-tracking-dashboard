import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'blue': 'hsl(246, 80%, 60%)',
        'work-color': 'hsl(15, 100%, 70%)',
        'play-color': 'hsl(195, 74%, 62%)',
        'study-color': 'hsl(348, 100%, 68%)',
        'exercise-color': 'hsl(145, 58%, 55%)',
        'social-color': 'hsl(264, 64%, 52%)',
        'self-care-color': 'hsl(43, 84%, 65%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        rubik: ["Rubik", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
