<SEO title="Alert" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/alert.svx"

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
          "type": "\"default\" | \"light\"",
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
          "name": "hideIcon",
          "description": "Hides the icon part from the alert."
        }
      ]
    }
  ]
</script>
