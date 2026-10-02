<SEO title="Color Configuration" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {colors} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/colors.svx"

  const colors = {
    "shadedColors" : [
      {
        "title": "Brand primary",
        "className": "[T]-brand-[S]",
        "variable": "--color-brand-[S]",
        "target": "*",
        "colors": [
          {
            "class": "bg-brand-50"
          },
          {
            "class": "bg-brand-100"
          },
          {
            "class": "bg-brand-200"
          },
          {
            "class": "bg-brand-300"
          },
          {
            "class": "bg-brand-400"
          },
          {
            "class": "bg-brand-500"
          },
          {
            "class": "bg-brand-600"
          },
          {
            "class": "bg-brand-700"
          },
          {
            "class": "bg-brand-800"
          },
          {
            "class": "bg-brand-900"
          },
          {
            "class": "bg-brand-950"
          }
        ]
      },
      {
        "title": "Error",
        "className": "[T]-error-[S]",
        "variable": "--color-error-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-error-50"},
          {"class": "bg-error-100"},
          {"class": "bg-error-200"},
          {"class": "bg-error-300"},
          {"class": "bg-error-400"},
          {"class": "bg-error-500"},
          {"class": "bg-error-600"},
          {"class": "bg-error-700"},
          {"class": "bg-error-800"},
          {"class": "bg-error-900"},
          {"class": "bg-error-950"}
        ]
      },
      {
        "title": "Info",
        "className": "[T]-info-[S]",
        "variable": "--color-info-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-info-50"},
          {"class": "bg-info-100"},
          {"class": "bg-info-200"},
          {"class": "bg-info-300"},
          {"class": "bg-info-400"},
          {"class": "bg-info-500"},
          {"class": "bg-info-600"},
          {"class": "bg-info-700"},
          {"class": "bg-info-800"},
          {"class": "bg-info-900"},
          {"class": "bg-info-950"}
        ]
      },
      {
        "title": "Success",
        "className": "[T]-success-[S]",
        "variable": "--color-success-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-success-50"},
          {"class": "bg-success-100"},
          {"class": "bg-success-200"},
          {"class": "bg-success-300"},
          {"class": "bg-success-400"},
          {"class": "bg-success-500"},
          {"class": "bg-success-600"},
          {"class": "bg-success-700"},
          {"class": "bg-success-800"},
          {"class": "bg-success-900"},
          {"class": "bg-success-950"}
        ]
      },
      {
        "title": "Warning",
        "className": "[T]-warning-[S]",
        "variable": "--color-warning-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-warning-50"},
          {"class": "bg-warning-100"},
          {"class": "bg-warning-200"},
          {"class": "bg-warning-300"},
          {"class": "bg-warning-400"},
          {"class": "bg-warning-500"},
          {"class": "bg-warning-600"},
          {"class": "bg-warning-700"},
          {"class": "bg-warning-800"},
          {"class": "bg-warning-900"},
          {"class": "bg-warning-950"}
        ]
      }
    ],
    "nonShadedColors" : [
      {
        "propertyName": "Background colors",
        "colors": [
          {
            "title": "Primary",
            "className": "bg-primary",
            "variable": "--background-color-primary"
          },
          {
            "title": "Secondary",
            "className": "bg-secondary",
            "variable": "--background-color-secondary"
          },
          {
            "title": "Tertiary",
            "className": "bg-tertiary",
            "variable": "--background-color-tertiary"
          },
          {
            "title": "Alternate background",
            "className": "bg-alt",
            "variable": "--background-color-alt"
          }
        ]
      },
      {
        "propertyName": "Text colors",
        "colors": [
          {
            "title": "Default",
            "className": "text-default",
            "variable": "--text-color-default"
          },
          {
            "title": "Text on brand",
            "className": "text-on-brand",
            "variable": "--text-color-on-brand"
          },
          {
            "title": "Muted",
            "className": "text-muted",
            "variable": "--text-color-muted"
          },
          {
            "title": "Alternate text",
            "className": "text-alt",
            "variable": "--text-color-alt"
          }
        ]
      }
    ]
  }
</script>