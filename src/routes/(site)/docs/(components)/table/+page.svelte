<SEO title="Table" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/table.svx"

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
            "type": "<a href=\"/docs/types#table-data-type\">TABLE_DATA</a>",
            "default": "undefined",
            "description": "The table rows data. It can be an array of objects, each representing a row. Cell values are rendered as plain text."
          },
          {
            "name": "keys",
            "type": "string[]",
            "default": "undefined",
            "description": "An array of keys used to map data from each row. It corresponds to the values in the row data. A missing key renders an empty cell."
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
            "type": "true | ClassNameValue",
            "default": "false",
            "description": "Enables hover effects on table rows. Set to true for the default hover effect, or provide a custom class name for further customization."
          },
          {
            "name": "trHeadClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for table row headers. Used to style header rows individually."
          },
          {
            "name": "trClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the table rows. Used to style individual rows."
          },
          {
            "name": "thClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for table header cells. Used to style the &lt;th&gt; cells."
          },
          {
            "name": "tdClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for table cells. Used to style individual cells."
          },
          {
            "name": "animationSpeed",
            "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
            "default": "\"normal\"",
            "description": "Controls the animation speed for the transitions on hover or other activities."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "undefined",
            "description": "Names the table for screen readers, and names the scrollable area around it. Use it when the table has no <code>&lt;caption&gt;</code>."
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
            "default": "false",
            "description": "Indicates whether the &lt;tr&gt; is a header row or a body row. Header rows render &lt;th&gt; cells."
          }
        ]
      }
    ],
    "th": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "scope",
            "type": "\"col\" | \"row\" | \"colgroup\" | \"rowgroup\"",
            "default": "\"col\"",
            "description": "Tells screen readers which cells this header covers. Keep the default for a column header, and use <code>\"row\"</code> for a header cell that names its row."
          }
        ]
      }
    ]
  }
</script>
