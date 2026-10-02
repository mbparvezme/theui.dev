# theui-svelte: Svelte 5 Component Library

### theui-svelte is a component library for Svelte 5, built on Tailwind CSS v4. It covers the pieces most applications need, with the accessibility and the theming already done.

## Introduction

theui-svelte is TheUI's component library for Svelte, built on Tailwind CSS. The components carry their own ARIA wiring and keyboard behavior, read your brand colors from your CSS, and merge any class you pass with tailwind-merge, so overriding a default does not mean fighting it.

This repository is the documentation site, [www.theui.dev](https://www.theui.dev). The library itself lives in [mbparvezme/theui-svelte](https://github.com/mbparvezme/theui-svelte).

# Features

The main features of the component library are:
- ARIA roles, keyboard support and focus handling in every component.
- Every component takes a `class`, merged with tailwind-merge, so your classes win.
- Left to right and right to left layouts, from one stylesheet.
- Brand colors and dark mode set from your own CSS variables.
- Written with Svelte 5 runes and snippets.
- Transitions with a speed you set per component or once for the whole library.
- Fully typed, with every exported type documented.

## Components

Version 3 exports 70 components plus the `notify` helper, documented across the pages below.

#### GETTING STARTED
<table>
  <tr>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs">Introduction</a></li>
        <li><a href="https://www.theui.dev/docs/installation">Installation</a></li>
        <li><a href="https://www.theui.dev/docs/colors">Colors and branding</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/global-defaults">Global defaults</a></li>
        <li><a href="https://www.theui.dev/docs/z-index">Z-index</a></li>
        <li><a href="https://www.theui.dev/docs/rtl">RTL</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/accessibility">Accessibility</a></li>
        <li><a href="https://www.theui.dev/docs/types">Types</a></li>
        <li><a href="https://www.theui.dev/docs/license">License</a></li>
      </ul>
    </td>
  </tr>
</table>

#### UI COMPONENTS
<table>
  <tr>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/accordion">Accordion</a></li>
        <li><a href="https://www.theui.dev/docs/alert">Alert</a></li>
        <li><a href="https://www.theui.dev/docs/avatar">Avatar</a></li>
        <li><a href="https://www.theui.dev/docs/badge">Badge</a></li>
        <li><a href="https://www.theui.dev/docs/breadcrumb">Breadcrumb</a></li>
        <li><a href="https://www.theui.dev/docs/button">Button</a></li>
        <li><a href="https://www.theui.dev/docs/button-group">Button group</a></li>
        <li><a href="https://www.theui.dev/docs/qab">Quick action button (QAB)</a></li>
        <li><a href="https://www.theui.dev/docs/card">Card</a></li>
        <li><a href="https://www.theui.dev/docs/chips">Chips</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/collapse">Collapse</a></li>
        <li><a href="https://www.theui.dev/docs/divider">Divider</a></li>
        <li><a href="https://www.theui.dev/docs/drawer">Drawer</a></li>
        <li><a href="https://www.theui.dev/docs/dropdown">Dropdown</a></li>
        <li><a href="https://www.theui.dev/docs/list-group">List group</a></li>
        <li><a href="https://www.theui.dev/docs/modal">Modal</a></li>
        <li><a href="https://www.theui.dev/docs/navbar">Navbar</a></li>
        <li><a href="https://www.theui.dev/docs/notification">Notification</a></li>
        <li><a href="https://www.theui.dev/docs/pagination">Pagination</a></li>
        <li><a href="https://www.theui.dev/docs/popover">Popover</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/popup">Popup</a></li>
        <li><a href="https://www.theui.dev/docs/progress-bar">Progress bar</a></li>
        <li><a href="https://www.theui.dev/docs/rating">Rating</a></li>
        <li><a href="https://www.theui.dev/docs/skeleton">Skeleton</a></li>
        <li><a href="https://www.theui.dev/docs/slider">Slider</a></li>
        <li><a href="https://www.theui.dev/docs/spinner">Spinner</a></li>
        <li><a href="https://www.theui.dev/docs/table">Table</a></li>
        <li><a href="https://www.theui.dev/docs/tabs">Tabs</a></li>
        <li><a href="https://www.theui.dev/docs/tooltip">Tooltip</a></li>
      </ul>
    </td>
  </tr>
</table>

#### FORM ELEMENTS
<table>
  <tr>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/form">Form</a></li>
        <li><a href="https://www.theui.dev/docs/form-wizard">Form wizard</a></li>
        <li><a href="https://www.theui.dev/docs/fieldset">Fieldset</a></li>
        <li><a href="https://www.theui.dev/docs/label">Label</a></li>
        <li><a href="https://www.theui.dev/docs/helper-text">Helper text</a></li>
        <li><a href="https://www.theui.dev/docs/input">Text input</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/checkbox">Checkbox</a></li>
        <li><a href="https://www.theui.dev/docs/radio-button">Radio button</a></li>
        <li><a href="https://www.theui.dev/docs/toggle">Toggle</a></li>
        <li><a href="https://www.theui.dev/docs/select">Select</a></li>
        <li><a href="https://www.theui.dev/docs/combobox">Combobox</a></li>
        <li><a href="https://www.theui.dev/docs/range">Range</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/stepper">Stepper</a></li>
        <li><a href="https://www.theui.dev/docs/otp-input">OTP input</a></li>
        <li><a href="https://www.theui.dev/docs/file-input">File input</a></li>
        <li><a href="https://www.theui.dev/docs/file-dropzone">File dropzone</a></li>
        <li><a href="https://www.theui.dev/docs/date-picker">Date picker</a></li>
        <li><a href="https://www.theui.dev/docs/time-picker">Time picker</a></li>
      </ul>
    </td>
  </tr>
</table>

#### UTILITIES
<table>
  <tr>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/close">Close</a></li>
        <li><a href="https://www.theui.dev/docs/container">Container</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="https://www.theui.dev/docs/dark-mode">Dark mode</a></li>
        <li><a href="https://www.theui.dev/docs/svg-icon">SVG icon</a></li>
      </ul>
    </td>
  </tr>
</table>

New in version 3: Avatar, Divider, Rating, Skeleton, Spinner, Combobox, Date picker, Time picker, File dropzone, Form wizard, OTP input, Range and Stepper.

# Installation

**Requirements:** Svelte 5.57.1 or newer, Tailwind CSS v4, and Node.js 22.12 or newer.

Follow one of the two methods to install the component library:
- Manual installation.
- Github boilerplate.

## Manual Installation

#### Install Sveltekit (Skip this step if you have already installed)
```bash
# When prompted "What would you like to add to your project?", select tailwindcss
npx sv create my-app
cd my-app

# If you did not select tailwindcss during creation, add it now:
# npx sv add tailwindcss
```

#### Install theui-svelte
```bash
npm install theui-svelte
```

#### Configuration
To integrate `theui-svelte` with your project, add the following lines to your `./src/app.css` file:
```diff
     @import 'tailwindcss';
+    @import 'theui-svelte/style';
+    @source "../node_modules/theui-svelte";
```

The `@source` line is what lets Tailwind scan the library's markup. Leave it out and every component renders unstyled.

The form styles come with the package, so there is no Tailwind plugin to add by hand. The typography plugin is not included: install `@tailwindcss/typography` yourself if your own pages use its `prose` classes.

That's it! You're ready to start building your awesome project. Now, run your application with:
```bash
npm run dev
```

#### Your first component
```svelte
<script>
  import { Button, Notification, notify } from "theui-svelte"
</script>

<Notification position="top-end" />

<Button onclick={() => notify("It works", "success")}>Say hello</Button>
```

If the button raises a notification, the components, the styles and the state are all wired up. Two more entry points come with the package: `theui-svelte/type` for the [types](https://www.theui.dev/docs/types), and `theui-svelte/function` for helpers such as `notify` and `sanitize`.

## Use Github Boilerplate
To install the starter template clone this Github repo from your terminal using the following commands, replacing my-app with your desired project name.

```bash
# Clone the project
git clone https://github.com/mbparvezme/theui-svelte-starter.git my-app
# Navigate to the project directory
cd my-app
# Install node modules
npm install
# Run the application
npm run dev
```

The starter still pins version 2. After cloning, run `npm i theui-svelte@latest` and work through the upgrade notes below.

# Upgrading from version 2

Version 3 is a break with version 2. These are the changes most likely to touch your code:

- Svelte 5.57.1 or newer and Node.js 22.12 or newer are required.
- The brand colors were renamed: `brand-primary-50` ... `brand-primary-950` are now `brand-50` ... `brand-950`, and `text-on-brand-primary` is now `text-on-brand`.
- The second brand color is gone. Use any Tailwind color, or one of your own, where you had `brand-secondary-*`.
- The raw surface values are prefixed: `--light1` ... `--dark3` are now `--theui-light1` ... `--theui-dark3`. This only matters if you overrode them.
- String props such as `helperText`, `title` and `label` render as plain text now. Pass a snippet, or write the content inside the component, where you used to pass markup.
- `Tab` and `TabPanel` require a `value`, and a tab opens the panel with the matching value.
- `Toggle` uses `checked` for checkboxes and `group` for radios; `value` is now only the input's value.
- `reverse` on `Checkbox`, `Radio` and `Toggle` is now `labelPosition="start" | "end"`.
- `style.css` no longer loads `@tailwindcss/typography`, and `@tailwindcss/forms` now installs with the library.

The full list is in the [changelog](https://github.com/mbparvezme/theui-svelte/blob/main/CHANGELOG.md) and on the [installation page](https://www.theui.dev/docs/installation).

## License

### Copyright 2026 TheUI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
