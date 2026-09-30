<SEO title="Navbar" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/navbar.svx"

  const component = {
    "navbar" : [
      {
        "key": "props",
        "title": "Props",
        "data": [
            {
              "name": "scrollBehavior",
              "type": "<a href=\"/docs/types#navbar-scroll-behavior-type\">NAV_SCROLL_BEHAVIOR</a>",
              "default": "\"default\"",
              "description": "Behavior when scrolling: \"default\", \"fixed\", \"shrinkOnScrollDown\", \"hideOnScrollDown\" or \"shrinkAndHide\". Every value except \"default\" makes the navbar fixed."
            },
            {
              "name": "scrollAmountToShrink",
              "type": "number",
              "default": "32",
              "description": "Scroll distance (px) before the navbar shrinks."
            },
            {
              "name": "scrollAmountToHide",
              "type": "number",
              "default": "128",
              "description": "Scroll distance (px) before the navbar hides."
            },
            {
              "name": "height",
              "type": "'sm' | 'md' | 'lg' | 'xl' | string",
              "default": "\"md\"",
              "description": "Height of the navbar. The presets set its vertical padding; any other value is used as classes."
            },
            {
              "name": "navBreakpoint",
              "type": "'sm' | 'md' | 'lg' | 'xl' | false",
              "default": "\"lg\"",
              "description": "Screen size below which the content of <code>NavCollapse</code> folds into the toggle menu. Set it to false to never fold."
            },
            {
              "name": "animationSpeed",
              "type": "<a href=\"/docs/types#animation-speed-type\">ANIMATE_SPEED</a>",
              "default": "\"fast\"",
              "description": "Transition speed of the navbar and all the components inside it."
            },
            {
              "name": "rounded",
              "type": "<a href=\"/docs/types#rounded-type\">ROUNDED</a>",
              "default": "\"md\"",
              "description": "Corner radius of the links, the dropdown menus and the mobile menu."
            },
            {
              "name": "ariaLabel",
              "type": "string",
              "default": "\"Navigation bar\"",
              "description": "Accessible name of the <code>&lt;nav&gt;</code> element."
            },
            {
              "name": "dropdownTriggerEvent",
              "type": "'hover' | 'click'",
              "default": "\"click\"",
              "description": "How every <code>NavDropdown</code> of this navbar opens. A dropdown can override it with its own <code>triggerEvent</code>."
            },
            {
              "name": "navInnerClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes for the inner container that holds the brand and the links."
            },
            {
              "name": "navCollapseClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes for the mobile menu created by <code>NavCollapse</code>."
            },
            {
              "name": "scrollShrinkClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes added while the navbar is shrunk."
            },
            {
              "name": "linkClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes for every <code>NavLink</code> and dropdown trigger."
            },
            {
              "name": "activeLinkClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes added to an active <code>NavLink</code>."
            },
            {
              "name": "dropdownLinkClasses",
              "type": "string",
              "default": "undefined",
              "description": "Custom classes for the <code>NavLink</code>s inside a <code>NavDropdown</code>."
            }
          ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the <code>&lt;nav&gt;</code> element, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The content of the navbar: NavBrand, NavCollapse, NavLinkGroup and so on."
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
            "default": "\"/\"",
            "description": "URL of the brand link, usually the homepage."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "undefined",
            "description": "Accessible name of the brand link. Only needed when the brand has no readable content, such as an SVG logo."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the brand link, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The logo or site name."
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
            "description": "The links and groups that fold into the toggle menu on small screens."
          },
          {
            "name": "toggleIcon",
            "description": "Custom icon for the toggle button. If provided, the default icon is replaced."
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
            "default": "undefined",
            "description": "Trigger label. A string renders as plain text; a Snippet is rendered as it is."
          },
          {
            "name": "align",
            "type": "'start' | 'end'",
            "default": "\"start\"",
            "description": "Aligns the menu to the start or end of its trigger."
          },
          {
            "name": "width",
            "type": "'sm' | 'md' | 'lg' | 'xl' | 'full'",
            "default": "\"sm\"",
            "description": "Width of the menu. \"full\" spans the whole navbar, for a mega menu."
          },
          {
            "name": "triggerEvent",
            "type": "'hover' | 'click'",
            "default": "Inherited from the Navbar's dropdownTriggerEvent, or \"click\"",
            "description": "How this dropdown opens."
          },
          {
            "name": "animation",
            "type": "'fade' | 'slide' | 'zoom'",
            "default": "\"fade\"",
            "description": "Open and close animation of the menu."
          },
          {
            "name": "arrowIcon",
            "type": "Snippet | boolean",
            "default": "true",
            "description": "Shows the arrow next to the label. Set it to false to hide it, or pass a Snippet to use your own icon."
          },
          {
            "name": "linkClasses",
            "type": "string",
            "default": "undefined",
            "description": "Custom classes for the dropdown trigger, merged with the Navbar's <code>linkClasses</code>."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the menu panel, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The content of the menu, usually NavLinks or custom mega menu content."
          },
          {
            "name": "label",
            "description": "Custom trigger content, as an alternative to the string prop."
          },
          {
            "name": "arrowIcon",
            "description": "Replaces the default arrow icon."
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
            "default": "undefined",
            "description": "Link content as a string, instead of writing it inside the component. It renders as plain text."
          },
          {
            "name": "active",
            "type": "string | boolean",
            "default": "false",
            "description": "Marks the link of the current page. It adds the Navbar's <code>activeLinkClasses</code> and <code>aria-current=\"page\"</code>."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "href",
            "description": "URL of the link. Without it, the NavLink renders as a button when it has an onclick, and as plain text otherwise."
          },
          {
            "name": "class",
            "description": "Classes for the link, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The link content, used when the text prop is not set."
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
            "type": "'start' | 'center' | 'end'",
            "default": "\"start\"",
            "description": "Horizontal alignment of the link group."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the group container, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The NavLinks and NavDropdowns of the group."
          }
        ]
      }
    ]
  }
</script>
