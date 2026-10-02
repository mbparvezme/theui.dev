<SEO title="Notification" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/notification.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "position",
          "type": "<a href=\"/docs/types#notification-position\">NOTIFICATION_POSITION</a>",
          "description": "Position of the notifications on the screen.",
          "default": "\"top-end\""
        },
        {
          "name": "animationSpeed",
          "type": "boolean",
          "description": "Enables or disables the show and hide animation of the notifications.",
          "default": "true"
        }
      ]
    },
    {
      "key": "functions",
      "title": "Functions",
      "data": [
        {
          "name" : "notify",
          "description": "Triggers the notifications with customizable options. For more details, read the <a href=\"#notify-function\">notify() Function doc.</a>"
        }
      ]
    }
  ]
</script>