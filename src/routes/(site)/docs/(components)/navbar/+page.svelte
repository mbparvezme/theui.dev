<SEO title="Navbar" />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page from "$lib/pages/navbar.svx"

  const component = {
    "navbar" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
            {
              "name": "scrollBehavior",
              "type": "<a href=\"/docs/types#navbar-scroll-behavior-type\">NAV_SCROLL_BEHAVIOR</a>",
              "default": "default",
              "description": "Behavior when scrolling (e.g., fixed/shrink/hide)"
            },
            {
              "name": "scrollAmountToShrink",
              "type": "number",
              "default": 32,
              "description": "Scroll distance (px) before navbar shrinks"
            },
            {
              "name": "scrollAmountToHide",
              "type": "number",
              "default": 128,
              "description": "Scroll distance (px) before navbar hides"
            },
            {
              "name": "height",
              "type": "'sm' | 'md' | 'lg' | 'xl' | string",
              "default": "md",
              "description": "Height of the navbar. Accepts predefined values or custom height classes."
            },
            {
              "name": "navBreakpoint",
              "type": "'sm' | 'md' | 'lg' | 'xl'",
              "default": "lg",
              "description": "Responsive breakpoint for collapse behavior ('sm' | 'md' | 'lg' | 'xl')"
            },
            {
              "name": "animationSpeed",
              "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
              "default": "fast",
              "description": "Transition speed for animations of the Navbar and all the components inside it."
            },
            {
              "name": "rounded",
              "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
              "default": "md",
              "description": "Controls border radius size of the Navbar and its components."
            },
            {
              "name": "ariaLabel",
              "type": "string",
              "default": "Navigation bar",
              "description": "ARIA label for accessibility"
            },
            {
              "name": "dropdownEvent",
              "type": "string",
              "default": "click",
              "description": "Dropdown trigger event applied all the Navbar dropdown."
            },
            {
              "name": "navInnerClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for the inner navbar container"
            },
            {
              "name": "navCollapseClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for the collapsed navbar state"
            },
            {
              "name": "scrollShrinkClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for the shrunk navbar state"
            },
            {
              "name": "linkClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for navbar links"
            },
            {
              "name": "activeLinkClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for active navbar links"
            },
            {
              "name": "dropdownLinkClasses",
              "type": "string",
              "default": "null",
              "description": "Custom CSS classes for dropdown links"
            }
          ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Any CSS classes used in the class prop will be applied to the container of the Navbar. It will override the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          }
        ]
      }
    ],
    "navBrand": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "href",
            "type": "string",
            "default": "/",
            "description": "URL to navigate to when clicked (usually homepage)"
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "Logo: click to go to homepage",
            "description": "ARIA label for accessibility (describes the brand link)"
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Any CSS classes used in the class prop will be applied to the van link. It will override the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          }
        ]
      }
    ],
    "navCollapse": [
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          },
          {
            "name": "toggleIcon",
            "description": "Custom icon for the collapse toggle button. If provided, default icon will be replaced."
          }
        ]
      }
    ],
    "navDropdown": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "label",
            "type": "string | Snippet",
            "default": "null",
            "description": "Dropdown trigger label (text or custom content)"
          },
          {
            "name": "align",
            "type": "string",
            "default": "start",
            "description": "Menu alignment ('start' | 'end')"
          },
          {
            "name": "width",
            "type": "'sm' | 'md' | 'lg' | 'xl' | 'full'",
            "default": "sm",
            "description": "Dropdown width (responsive or full-width)"
          },
          {
            "name": "triggerEvent",
            "type": "string",
            "default": "click",
            "description": "Dropdown trigger behavior ('hover' | 'click')"
          },
          {
            "name": "animation",
            "type": "string",
            "default": "fade",
            "description": "Menu open/close animation ('fade' | 'slide' | 'zoom')"
          },
          {
            "name": "arrowIcon",
            "type": "Snippet | boolean",
            "default": true,
            "description": "Custom arrow icon (Snippet) or visibility toggle (boolean)"
          },
          {
            "name": "linkClasses",
            "type": "string",
            "default": "null",
            "description": "Custom CSS classes for dropdown links"
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Any CSS classes used in the class prop will be applied to the container of the navbar dropdown. It will override the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          }
        ]
      }
    ],
    "navLink": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "text",
            "type": "string",
            "default": "null",
            "description": "Link text (alternative to using children slot)"
          },
          {
            "name": "active",
            "type": "string | boolean",
            "default": false,
            "description": "Controls active state (boolean) or adds a custom active class (string)"
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Any CSS classes used in the class prop will be applied to the container of the nav link. It will override the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          }
        ]
      }
    ],
    "navLinkGroup": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "align",
            "type": "string",
            "default": "start",
            "description": "Horizontal alignment of the link group ('start' | 'end' | 'center')"
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Any CSS classes used in the class prop will be applied to the container of the nav link. It will override the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Snippet for the main content of the component."
          }
        ]
      }
    ]
  }
</script>
