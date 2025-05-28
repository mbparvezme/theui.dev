<SEO title="Entry-Exit Popup" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/popup.svx"
  import SEO from "$lib/SEO.svelte"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "trigger",
          "type": "'onEntry' | 'onExit' | 'onEntryExit'",
          "default": "\"onEntry\"",
          "description": "Defines when the popup should appear: on page load, before exit, or both."
        },
        {
          "name": "repeat",
          "type": "boolean | 'page'",
          "default": true,
          "description": "Controls how often the popup appears. If true, it shows on every page load. If false, it appears only once. If 'page', it shows once per page."
        },
        {
          "name": "backdrop",
          "type": "boolean | string",
          "default": true,
          "description": "Enables or customizes the popup backdrop. Accepts a boolean or a custom class for styling."
        },
        {
          "name": "staticBackdrop",
          "type": "boolean",
          "default": false,
          "description": "If true, prevents closing the popup by clicking outside of it."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"xl\"",
          "description": "Defines the border-radius of the popup for consistent design."
        }
      ]
    },
    {
      "key": "snippets",
      "title": "Snippets",
      "data": [
        {
          "name": "entryContent",
          "description": "Content to display when the popup is triggered on page entry."
        },
        {
          "name": "exitContent",
          "description": "Content to display when the popup is triggered on page exit."
        }
      ]
    }
  ]
</script>
