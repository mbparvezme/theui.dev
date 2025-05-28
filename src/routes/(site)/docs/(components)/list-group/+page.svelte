<SEO title="List Group" />
<Page {component} />

<script lang="ts">
  import Page from "$lib/pages/list-group.svx"
  import SEO from "$lib/SEO.svelte"

  const component = {
    "listGroup" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "description": "Controls the animation speed for the List Group.",
            "default": "\"normal\""
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "description": "Determines the border radius of the List Group items.",
            "default": "\"md\""
          },
          {
            "name": "variant",
            "type": "'bordered' | 'flat'",
            "description": "Specifies the style variant of the List Group, either bordered or flat.",
            "default": "bordered"
          },
          {
            "name": "itemClasses",
            "type": "string",
            "description": "Additional classes to apply to each List Group item.",
            "default": "\"\""
          },
          {
            "name": "type",
            "type": "'div' | 'ul'",
            "description": "Defines the container type, either a &lt;div&gt; or &lt;ul&gt; element.",
            "default": "ul"
          }
        ]
      }
    ],
    "listItem": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "href",
            "type": "string",
            "description": "Specifies the URL if the List Group item should be rendered as a link.",
            "default": "undefined"
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "description": "Controls the animation speed for the List Group item.",
            "default": "normal"
          }
        ]
      }
    ]
  }
</script>
