<SEO title="Rating" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/rating.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "value",
          "type": "number",
          "default": "0",
          "description": "The score. Bindable with <code>bind:value</code>. A read-only rating draws any fraction exactly."
        },
        {
          "name": "max",
          "type": "number",
          "default": "5",
          "description": "Number of stars."
        },
        {
          "name": "allowHalf",
          "type": "boolean",
          "default": "false",
          "description": "Lets the user pick half a star, so the value moves in steps of 0.5."
        },
        {
          "name": "readonly",
          "type": "boolean",
          "default": "false",
          "description": "Shows the score without letting anyone change it. It is announced as a single image with its value."
        },
        {
          "name": "disabled",
          "type": "boolean",
          "default": "false",
          "description": "Dims the rating and stops any change. With a name, the current value is still submitted."
        },
        {
          "name": "clearable",
          "type": "boolean",
          "default": "true",
          "description": "Clicking the star that is already chosen clears the rating back to 0."
        },
        {
          "name": "size",
          "type": "<a href=\"/docs/types#rating-size-type\">RATING_SIZE</a>",
          "default": "\"md\"",
          "description": "Size of the stars: \"sm\", \"md\", \"lg\" or \"xl\"."
        },
        {
          "name": "name",
          "type": "string",
          "default": "undefined",
          "description": "Name of the field, so the score is submitted with the form."
        },
        {
          "name": "ariaLabel",
          "type": "string",
          "default": "\"Rating\"",
          "description": "Accessible name of the rating, such as \"Rate this product\"."
        },
        {
          "name": "itemLabel",
          "type": "(value: number, max: number) => string",
          "default": "(v, m) => `${v} of ${m}`",
          "description": "Builds the text read for each star, and for the whole rating when it is read-only."
        },
        {
          "name": "onchange",
          "type": "(value: number) => void",
          "default": "undefined",
          "description": "Runs with the new score every time it changes."
        },
        {
          "name": "itemClasses",
          "type": "string",
          "default": "\"\"",
          "description": "Custom classes for every star."
        },
        {
          "name": "activeClasses",
          "type": "string",
          "default": "\"text-warning-400\"",
          "description": "Custom classes for the filled part of the stars."
        },
        {
          "name": "inactiveClasses",
          "type": "string",
          "default": "\"text-gray-300 dark:text-gray-600\"",
          "description": "Custom classes for the empty part of the stars."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "class",
          "description": "Classes for the rating element, merged with the default classes. The gap between stars is set here."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "icon",
          "description": "Replaces the star with your own shape. It is drawn twice, once empty and once filled, and takes the colour from activeClasses and inactiveClasses."
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": null
    }
  ]
</script>
