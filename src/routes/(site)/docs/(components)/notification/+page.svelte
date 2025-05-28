<SEO title="Notification" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/notification.svx"

  const component = [
    {
      "key": "props",
      "title": "Props",
      "data": [
        {
          "name": "position",
          "type": "<a href=\"/docs/types#notification-position\">NOTIFICATION_POSITION</a>",
          "description": "Position of the modal on the screen.",
          "default": "\"center\""
        },
        {
          "name": "animationSpeed",
          "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
          "description": "Speed of the animation.",
          "default": "\"fast\""
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