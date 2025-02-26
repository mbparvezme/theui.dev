import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import twShades from 'tw-color-shades';

export default {
  content: [
    './src/**/*.{html,js,svelte,svx,ts}',
    "./node_modules/theui-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        tertiary: twShades("--ui-bg-tertiary") as string
      },
      fontFamily: {
        'sans': ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        'display': ['"Noticia Text"'],
        'mono': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
    }
  },

  variants: {
    extend: {
      fill: ['dark'], // Enable dark mode for fill
    },
  },

  presets: [require("theui-svelte/preset")],

  plugins: [typography, forms]
} satisfies Config;
