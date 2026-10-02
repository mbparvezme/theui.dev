<SEO title="Alert" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/alert.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "type",
          "type": "'error' | 'info' | 'success' | 'warning'",
          "default": "\"error\"",
          "description": "Specifies the type of alert, which affects its color and icon."
        },
        {
          "name": "theme",
          "type": "\"default\" | \"soft\"",
          "default": "\"default\"",
          "description": "Determines the overall appearance theme of the alert."
        },
        {
          "name": "variant",
          "type": "\"card\" | \"borderTop\" | \"borderBottom\" | \"borderStart\"",
          "default": "\"card\"",
          "description": "Specifies the structural style of the alert."
        },
        {
          "name": "rounded",
          "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
          "default": "\"md\"",
          "description": "Defines the border-radius of the alert, providing control over its rounded corners."
        },
        {
          "name": "role",
          "type": "string",
          "default": "\"alert\"",
          "description": "Sets the ARIA role of the alert. Use a less urgent role such as \"status\" for non-critical messages."
        }
      ]
    },
    {
      "key": "dynamicProps",
      "title": "Dynamic props",
      "data": [
        {
          "name": "dismissible",
          "type": "N/A",
          "default": "N/A",
          "description": "Makes the alert dismissible by adding a close button."
        },
        {
          "name": "icon",
          "description": "Shows a predefined icon matching the alert type."
        }
      ]
    }
  ]
</script>
