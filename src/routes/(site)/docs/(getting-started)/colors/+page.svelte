<SEO title="Color Configuration" />
<Page {colors} />

<script lang="ts">
  import Page from "$lib/pages/colors.svx"
  import SEO from "$lib/SEO.svelte"

  const colors = {
    "shadedColors" : [
      {
        "title": "Brand primary",
        "className": "[T]-brand-primary-[S]",
        "variable": "--color-brand-primary-[S]",
        "target": "*",
        "colors": [
          {
            "class": "bg-brand-primary-50",
            "code": "oklch(0.95 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-100",
            "code": "oklch(0.9 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-200",
            "code": "oklch(0.8 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-300",
            "code": "oklch(0.7 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-400",
            "code": "oklch(0.6 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-500",
            "code": "oklch(0.5 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-600",
            "code": "oklch(0.4 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-700",
            "code": "oklch(0.3 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-800",
            "code": "oklch(0.2 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-900",
            "code": "oklch(0.1 0.2364 270.95)"
          },
          {
            "class": "bg-brand-primary-950",
            "code": "oklch(0.05 0.2364 270.95)"
          }
        ]
      },
      {
        "title": "Brand secondary",
        "className": "[T]-brand-secondary-[S]",
        "variable": "--color-brand-secondary-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-brand-secondary-50",  "code" : "oklch(1 0.1094 35.42)"},
          {"class": "bg-brand-secondary-100", "code" : "oklch(1 0.1594 35.42)"},
          {"class": "bg-brand-secondary-200", "code" : "oklch(0.94 0.1594 35.42)"},
          {"class": "bg-brand-secondary-300", "code" : "oklch(0.86 0.1594 35.42)"},
          {"class": "bg-brand-secondary-400", "code" : "oklch(0.78 0.1594 35.42)"},
          {"class": "bg-brand-secondary-500", "code" : "oklch(0.7 0.1594 35.42)"},
          {"class": "bg-brand-secondary-600", "code" : "oklch(0.62 0.1594 35.42)"},
          {"class": "bg-brand-secondary-700", "code" : "oklch(0.52 0.1594 35.42)"},
          {"class": "bg-brand-secondary-800", "code" : "oklch(0.42 0.1594 35.42)"},
          {"class": "bg-brand-secondary-900", "code" : "oklch(0.32 0.1594 35.42)"},
          {"class": "bg-brand-secondary-950", "code" : "oklch(0.22 0.1594 35.42)"}
        ]
      },
      {
        "title": "Error",
        "className": "[T]-error-[S]",
        "variable": "--color-error-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-error-50",  "code" : "oklch(0.95 0.2311 23.34)"},
          {"class": "bg-error-100", "code" : "oklch(0.9 0.2311 23.34)"},
          {"class": "bg-error-200", "code" : "oklch(0.8 0.2311 23.34)"},
          {"class": "bg-error-300", "code" : "oklch(0.7 0.2311 23.34)"},
          {"class": "bg-error-400", "code" : "oklch(0.6 0.2311 23.34)"},
          {"class": "bg-error-500", "code" : "oklch(0.5 0.2311 23.34)"},
          {"class": "bg-error-600", "code" : "oklch(0.4 0.2311 23.34)"},
          {"class": "bg-error-700", "code" : "oklch(0.3 0.2311 23.34)"},
          {"class": "bg-error-800", "code" : "oklch(0.2 0.2311 23.34)"},
          {"class": "bg-error-900", "code" : "oklch(0.1 0.2311 23.34)"},
          {"class": "bg-error-950", "code" : "oklch(0.05 0.2311 23.34)"}
        ]
      },
      {
        "title": "Info",
        "className": "[T]-info-[S]",
        "variable": "--color-info-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-info-50",  "code" : "oklch(0.95 0.178757 246.9752)"},
          {"class": "bg-info-100", "code" : "oklch(0.9 0.178757 246.9752)"},
          {"class": "bg-info-200", "code" : "oklch(0.8 0.178757 246.9752)"},
          {"class": "bg-info-300", "code" : "oklch(0.7 0.178757 246.9752)"},
          {"class": "bg-info-400", "code" : "oklch(0.6 0.178757 246.9752)"},
          {"class": "bg-info-500", "code" : "oklch(0.5 0.178757 246.9752)"},
          {"class": "bg-info-600", "code" : "oklch(0.4 0.178757 246.9752)"},
          {"class": "bg-info-700", "code" : "oklch(0.3 0.178757 246.9752)"},
          {"class": "bg-info-800", "code" : "oklch(0.2 0.178757 246.9752)"},
          {"class": "bg-info-900", "code" : "oklch(0.1 0.178757 246.9752)"},
          {"class": "bg-info-950", "code" : "oklch(0.05 0.178757 246.9752)"}
        ]
      },
      {
        "title": "Success",
        "className": "[T]-success-[S]",
        "variable": "--color-success-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-success-50",  "code" : "oklch(0.95 0.11219 169.9396)"},
          {"class": "bg-success-100", "code" : "oklch(0.9 0.11219 169.9396)"},
          {"class": "bg-success-200", "code" : "oklch(0.8 0.11219 169.9396)"},
          {"class": "bg-success-300", "code" : "oklch(0.7 0.11219 169.9396)"},
          {"class": "bg-success-400", "code" : "oklch(0.6 0.11219 169.9396)"},
          {"class": "bg-success-500", "code" : "oklch(0.5 0.11219 169.9396)"},
          {"class": "bg-success-600", "code" : "oklch(0.4 0.11219 169.9396)"},
          {"class": "bg-success-700", "code" : "oklch(0.3 0.11219 169.9396)"},
          {"class": "bg-success-800", "code" : "oklch(0.2 0.11219 169.9396)"},
          {"class": "bg-success-900", "code" : "oklch(0.1 0.11219 169.9396)"},
          {"class": "bg-success-950", "code" : "oklch(0.05 0.11219 169.9396)"}
        ]
      },
      {
        "title": "Warning",
        "className": "[T]-warning-[S]",
        "variable": "--color-warning-[S]",
        "target": "*",
        "colors": [
          {"class": "bg-warning-50",  "code" : "oklch(0.98 0.0257 92.39)"},
          {"class": "bg-warning-100", "code" : "oklch(0.96 0.0509 92.55)"},
          {"class": "bg-warning-200", "code" : "oklch(0.93 0.0965 91.53)"},
          {"class": "bg-warning-300", "code" : "oklch(0.9 0.1366 91.18)"},
          {"class": "bg-warning-400", "code" : "oklch(0.87 0.1623 88.79)"},
          {"class": "bg-warning-500", "code" : "oklch(0.84 0.172159 84.9338)"},
          {"class": "bg-warning-600", "code" : "oklch(0.71 0.1453 85.03)"},
          {"class": "bg-warning-700", "code" : "oklch(0.58 0.1176 86.02)"},
          {"class": "bg-warning-800", "code" : "oklch(0.43 0.0876 86.65)"},
          {"class": "bg-warning-900", "code" : "oklch(0.28 0.0559 90.57)"},
          {"class": "bg-warning-950", "code" : "oklch(0.19 0.0365 90.86)"}
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
            "variable": "--background-color-primary",
            "light": "#FFFDFD",
            "dark": "#16161D"
          },
          {
            "title": "Secondary",
            "className": "bg-secondary",
            "variable": "--background-color-secondary",
            "light": "#F5F3F3",
            "dark": "#1E1E26"
          },
          {
            "title": "Tertiary",
            "className": "bg-tertiary",
            "variable": "--background-color-tertiary",
            "light": "#EBE9E9",
            "dark": "#26262F"
          },
          {
            "title": "Alternate background",
            "className": "bg-alt",
            "variable": "--background-color-alt",
            "light": "#16161D",
            "dark": "#F5F3F3"
          }
        ]
      },
      {
        "propertyName": "Text colors",
        "colors": [
          {
            "title": "Default",
            "className": "text-default",
            "variable": "--text-color-default",
            "light": "#16161D",
            "dark": "#F5F3F3"
          },
          {
            "title": "Text on brand primary",
            "className": "text-on-brand-primary",
            "variable": "--text-color-on-brand-primary",
            "light": "#ffffff",
            "dark": "#ffffff"
          },
          {
            "title": "Text on brand secondary",
            "className": "text-on-brand-secondary",
            "variable": "--text-color-on-brand-secondary",
            "light": "var(--text-color-on-brand-secondary)",
            "dark": "var(--text-color-on-brand-secondary)"
          },
          {
            "title": "Muted",
            "className": "text-muted",
            "variable": "--text-color-muted",
            "light": "#636369",
            "dark": "#A1A1AA"
          },
          {
            "title": "Alternate text",
            "className": "text-alt",
            "variable": "--text-color-alt",
            "light": "#FFFDFD",
            "dark": "#16161D"
          }
        ]
      }
    ]
  }
</script>