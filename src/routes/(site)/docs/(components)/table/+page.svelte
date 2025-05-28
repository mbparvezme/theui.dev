<SEO title="Table" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/table.svx"

  const component =   {
    "table": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "headers",
            "type": "string[] | Record<string, unknown>",
            "default": "undefined",
            "description": "Defines the table headers. It can be an array of strings or a record of key-value pairs for dynamic data headers."
          },
          {
            "name": "data",
            "type": "<a href=\"/docs/types#table-data-type\">TABLE_DATA_TYPE</a>",
            "default": "undefined",
            "description": "The table rows data. It can be an array of objects, each representing a row."
          },
          {
            "name": "keys",
            "type": "string[]",
            "default": "undefined",
            "description": "An array of keys used to map data from each row. It corresponds to the values in the row data."
          },
          {
            "name": "border",
            "type": "'x' | 'y' | 'both' | 'none'",
            "default": "\"both\"",
            "description": "Controls the borders around the table. The options are 'x', 'y', 'both', or 'none'."
          },
          {
            "name": "borderColor",
            "type": "string",
            "default": "\"border-gray-200/80 dark:border-gray-800/80\"",
            "description": "Sets the color of the borders. By default, it uses a light gray border color for light mode and dark gray for dark mode."
          },
          {
            "name": "space",
            "type": "'compact' | 'default' | 'comfortable'",
            "default": "\"default\"",
            "description": "Controls the spacing between table rows and cells. Options include 'compact', 'default', and 'comfortable'."
          },
          {
            "name": "stripe",
            "type": "'even' | 'odd' | ClassNameValue",
            "default": "undefined",
            "description": "Defines the stripe pattern for table rows. The options are 'even', 'odd', or a custom class name for further customization."
          },
          {
            "name": "hover",
            "type": "boolean | ClassNameValue",
            "default": "undefined",
            "description": "Enables hover effects on table rows. The default is 'false', or you can provide a custom class name for further customization."
          },
          {
            "name": "trHeadClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for table row headers. Used to style header rows individually."
          },
          {
            "name": "trClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for the table rows. Used to style individual rows."
          },
          {
            "name": "tdClasses",
            "type": "string",
            "default": "null",
            "description": "Custom classes for table cells. Used to style individual cells."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "default": "\"normal\"",
            "description": "Controls the animation speed for the transitions on hover or other activities."
          },
          {
            "name": "id",
            "type": "string",
            "default": "&lt;RANDOM STRING&gt;",
            "description": "The unique ID for the table element, which is automatically generated using a token if not provided."
          }
        ]
      }
    ],
    "thead": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "headers",
            "type": "string[] | Record<string, unknown>",
            "default": "undefined",
            "description": "Defines the table headers as an array of strings or an object with key-value pairs."
          },
          {
            "name": "keys",
            "type": "string[]",
            "default": "undefined",
            "description": "Specifies the keys used to access data in the table header row."
          }
        ]
      }
    ],
    "tbody": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "data",
            "type": "string[] | Record<string, unknown>[]",
            "default": "undefined",
            "description": "An array of strings or objects with key-value pairs representing the data of the table."
          },
          {
            "name": "keys",
            "type": "string[]",
            "default": "undefined",
            "description": "Specifies the keys to extract values from the data objects."
          }
        ]
      }
    ],
    "tr": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "data",
            "type": "string[] | Record<string, unknown>",
            "default": "undefined",
            "description": "An array of strings or an object with key-value pairs representing the data of the table row."
          },
          {
            "name": "keys",
            "type": "string[]",
            "default": "undefined",
            "description": "Specifies the keys to extract values from the row data object."
          },
          {
            "name": "tableHeader",
            "type": "boolean",
            "default": "undefined",
            "description": "Indicates whether the &lt;tr&gt; is a header row or a body row."
          }
        ]
      }
    ]
  }
</script>
