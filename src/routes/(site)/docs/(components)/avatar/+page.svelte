<SEO title="Avatar" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/avatar.svx"

  const component = {
    "avatar": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "src",
            "type": "string",
            "default": "undefined",
            "description": "Image of the avatar. When it is missing or fails to load, the initials or the icon are shown instead."
          },
          {
            "name": "alt",
            "type": "string",
            "default": "undefined",
            "description": "Alternative text of the image, and the accessible name of a fallback avatar. Use an empty string when the name is already written next to the avatar."
          },
          {
            "name": "name",
            "type": "string",
            "default": "undefined",
            "description": "Full name of the person. Its initials are shown when there is no image, and screen readers read the full name."
          },
          {
            "name": "size",
            "type": "<a href=\"/docs/types#avatar-size-type\">AVATAR_SIZE</a>",
            "default": "\"md\"",
            "description": "Size of the avatar: \"xs\", \"sm\", \"md\", \"lg\", \"xl\" or \"2xl\". Inside an AvatarGroup the group decides."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "\"full\"",
            "description": "Defines the border radius of the component. Inside an AvatarGroup the group decides."
          },
          {
            "name": "status",
            "type": "<a href=\"/docs/types#avatar-status-type\">AVATAR_STATUS</a>",
            "default": "undefined",
            "description": "Shows a presence dot: \"online\", \"offline\", \"busy\" or \"away\"."
          },
          {
            "name": "statusPosition",
            "type": "\"top\" | \"bottom\"",
            "default": "\"bottom\"",
            "description": "Corner the status dot sits in."
          },
          {
            "name": "href",
            "type": "string",
            "default": "undefined",
            "description": "Turns the whole avatar into a link."
          },
          {
            "name": "imgClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the image."
          },
          {
            "name": "statusClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the status dot."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the avatar itself, merged with the default classes. Use it to change the fallback colours."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Custom content of the avatar, such as an icon. Used when there is no image."
          }
        ]
      },
      {
        "key": "functions",
        "title": "Functions",
        "data": null
      }
    ],
    "avatarGroup": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "max",
            "type": "number",
            "default": "undefined",
            "description": "Number of avatars to show. The rest are counted in a final \"+N\" avatar."
          },
          {
            "name": "size",
            "type": "<a href=\"/docs/types#avatar-size-type\">AVATAR_SIZE</a>",
            "default": "\"md\"",
            "description": "Size of every avatar in the group."
          },
          {
            "name": "rounded",
            "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
            "default": "\"full\"",
            "description": "Border radius of every avatar in the group."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "undefined",
            "description": "Accessible name of the group, such as \"Project members\"."
          },
          {
            "name": "moreClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the \"+N\" avatar."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the group element, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The Avatar components of the group."
          }
        ]
      },
      {
        "key": "functions",
        "title": "Functions",
        "data": null
      }
    ]
  }
</script>
