# theui-svelte: Svelte 5 Component Library

### Kickstart your development with the theui-svelte, a comprehensive component library designed for the Svelte ecosystem. Leveraging the power of Svelte (v5) and Tailwind CSS (v4), the theui-svelte accelerates your development process, helping you build and deliver projects faster.

## Introduction

Welcome to the theui-svelte, the component library for Svelte by TheUI, built on top of TailwindCSS. Our components are designed to be highly accessible and customizable out of the box. By combining the capabilities of Svelte with the versatile features of TailwindCSS, the theui-svelte offers a powerful tool-set to enhance your development workflow.

# Features

The main features of the component library are:
- Built with ARIA roles and WCAG compliance for better usability.
- Highly customizable
- Support LTR/RTL.
- Easy theming, branding, and dark/light mode control.
- Optimized for leveraging svelte's reactivity
- Includes smooth transitions and animations for better user experience.
- Fully typed for enhanced development

## Components

#### UI COMPONENTS
<table>
  <tr>
    <td>
      <ul>
        <li><a href="/docs/accordion">Accordion</a></li>
        <li><a href="/docs/alert">Alert</a></li>
        <li><a href="/docs/badge">Badge</a></li>
        <li><a href="/docs/breadcrumb">Breadcrumb</a></li>
        <li><a href="/docs/button">Button</a></li>
        <li><a href="/docs/button-group">Button group</a></li>
        <li><a href="/docs/qab">Quick action button (QAB)</a></li>
        <li><a href="/docs/card">Card</a></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><a href="/docs/chips">Chips</a></li>
        <li><a href="/docs/collapse">Collapse</a></li>
        <li><a href="/docs/drawer">Drawer</a></li>
        <li><a href="/docs/dropdown">Dropdown</a></li>
        <li><a href="/docs/list-group">List group</a></li>
        <li><a href="/docs/modal">Modal</a></li>
        <li><a href="/docs/navbar">Navbar</a></li>
        <li><a href="/docs/notification">Notification</a></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><a href="/docs/pagination">Pagination</a></li>
        <li><a href="/docs/popover">Popover</a></li>
        <li><a href="/docs/popup">Popup</a></li>
        <li><a href="/docs/progress-bar">Progress bar</a></li>
        <li><a href="/docs/slider">Slider</a></li>
        <li><a href="/docs/table">Table</a></li>
        <li><a href="/docs/tabs">Tabs</a></li>
        <li><a href="/docs/tooltip">Tooltip</a></li>
      </ul>
    </td>
  </tr>
</table>

#### FORM ELEMENTS
<table>
  <tr>
    <td>
      <ul>
        <li><a href="/docs/form">Form</a></li>
        <li><a href="/docs/checkbox">Checkbox</a></li>
        <li><a href="/docs/radio-button">Radio button</a></li>
        <li><a href="/docs/label">Label</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="/docs/file-input">File input</a></li>
        <li><a href="/docs/input">Text input</a></li>
        <li><a href="/docs/toggle">Toggle</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="/docs/select">Select</a></li>
        <li><a href="/docs/helper-text">Helper text</a></li>
        <li><a href="/docs/fieldset">Fieldset</a></li>
      </ul>
    </td>
  </tr>
</table>

#### UTILITIES
<table>
  <tr>
    <td>
      <ul>
        <li><a href="/docs/close">Close</a></li>
        <li><a href="/docs/svg-icon">SVG Icon</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="/docs/container">Container</a></li>
      </ul>
    </td>
    <td style="vertical-align: top;">
      <ul>
        <li><a href="/docs/dark-mode">Dark mode</a></li>
      </ul>
    </td>
  </tr>
</table>

# Installation
Install the theui-svelte component library in your project or start a new project with the boilerplate template. Install it to build fast and deliver faster.

## Installation Criteria

Follow one of the two methods to install the component library:
- Github boilerplate.
- Manually installation.

### Use Github Boilerplate
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

### Manual Installation
Easily add theui-svelte to your project via a GitHub boilerplate or manual installation. For manual setup:
- Install Sveltekit with TailwindCSS and theui-svelte
- Configure Tailwind CSS by updating the `./src/app.css` file.

#### Install Sveltekit (Skip this step if you have already installed)
```bash
npx sv create my-app
cd my-app
# Install node modules
npm install
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

That's it! You're ready to start building your awesome project. Now, run your application with:
```bash
npm run dev
```

## License

### Copyright 2026 TheUI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.