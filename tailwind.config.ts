import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme')
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/theui-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        'display': ['"Poiret One"'],
        // 'mono': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      },
    }
  },

  presets: [require("theui-svelte/preset")],

  plugins: [typography, forms]
} satisfies Config;
