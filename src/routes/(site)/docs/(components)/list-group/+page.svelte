<SEO title="List Group" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/list-group.svx"

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
            "description": "Determines the border radius of the List Group. Not applied to the flat variant.",
            "default": "\"md\""
          },
          {
            "name": "variant",
            "type": "'bordered' | 'flat'",
            "description": "Specifies the style variant of the List Group, either bordered or flat.",
            "default": "\"bordered\""
          },
          {
            "name": "itemClasses",
            "type": "string",
            "description": "Additional classes to apply to each List Group item.",
            "default": "\"\""
          },
          {
            "name": "size",
            "type": "'sm' | 'md' | 'lg' | 'xl'",
            "description": "Sets the padding size of all the List Group items.",
            "default": "\"md\""
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
            "description": "Specifies the URL if the List Group item should be rendered as a link. Other attributes added to the item are passed to the link.",
            "default": "undefined"
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "description": "Controls the animation speed for the List Group item. Inherits from the List Group if not set.",
            "default": "\"normal\""
          },
          {
            "name": "size",
            "type": "'sm' | 'md' | 'lg' | 'xl'",
            "description": "Sets the padding size of the item. Overrides the size set on the List Group.",
            "default": "\"md\""
          }
        ]
      }
    ]
  }
</script>
