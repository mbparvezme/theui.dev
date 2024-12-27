import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/theui-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {}
  },

  presets: [require("theui-svelte/preset")],

  plugins: [typography, forms]
} satisfies Config;
