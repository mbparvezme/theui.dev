<SEO title="Slider" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "#lib/SEO.svelte"
  import Page, { metadata } from "#lib/pages/slider.svx"

  const component = {
    "slider": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "autoPlay",
            "type": "boolean",
            "default": "true",
            "description": "Moves to the next slide by itself. At the last slide of a slider that doesn't loop, it goes back to the first slide."
          },
          {
            "name": "paused",
            "type": "boolean",
            "default": "false",
            "description": "Bindable. Auto play is stopped, by the pause button or by your own control."
          },
          {
            "name": "stopOnHover",
            "type": "boolean",
            "default": "true",
            "description": "Pauses auto play while the mouse is over the slider."
          },
          {
            "name": "slideDuration",
            "type": "number",
            "default": "5000",
            "description": "Time (in milliseconds) each slide stays before auto play moves to the next one."
          },
          {
            "name": "transitionDuration",
            "type": "number",
            "default": "750",
            "description": "Time (in milliseconds) the move between two slides takes. 0 changes slides instantly."
          },
          {
            "name": "activeSlide",
            "type": "number",
            "default": "1",
            "description": "Bindable. The current slide, starting from 1. A number above the slide count shows the last slide."
          },
          {
            "name": "onchange",
            "type": "(activeSlide: number) => void",
            "default": "undefined",
            "description": "Runs with the new slide number every time the slide changes."
          },
          {
            "name": "loop",
            "type": "boolean",
            "default": "true",
            "description": "After the last slide comes the first one. Looping needs more slides than the slider shows at once."
          },
          {
            "name": "swipe",
            "type": "boolean",
            "default": "true",
            "description": "Changes slides by swiping on touch screens and dragging with the mouse."
          },
          {
            "name": "mousewheel",
            "type": "boolean",
            "default": "false",
            "description": "Changes slides with the mouse wheel or a trackpad, one slide per gesture."
          },
          {
            "name": "effect",
            "type": "<a href=\"/docs/types#slider-effect-type\">SLIDER_EFFECT</a>",
            "default": "\"slide\"",
            "description": "How one slide changes to the next: \"slide\", \"fade\", \"zoom\", \"flip\" or \"cube\"."
          },
          {
            "name": "kenBurns",
            "type": "boolean",
            "default": "false",
            "description": "Slowly zooms and pans the image of each slide while it is shown. Works on image slides only."
          },
          {
            "name": "parallax",
            "type": "boolean | number",
            "default": "false",
            "description": "Moves the image of each slide slower than the slide. true is 0.5; a number sets the strength from 0 to 1. Works with the \"slide\" effect on image slides only."
          },
          {
            "name": "direction",
            "type": "<a href=\"/docs/types#slider-direction-type\">SLIDER_DIRECTION</a>",
            "default": "\"horizontal\"",
            "description": "Moves the slides side to side or, with \"vertical\", up and down. A vertical slider is h-96 unless you set a height with class."
          },
          {
            "name": "perView",
            "type": "<a href=\"/docs/types#slider-responsive-type\">SLIDER_RESPONSIVE</a>&lt;number&gt;",
            "default": "1",
            "description": "Number of slides shown at once, or a number per screen size. Works with the \"slide\" effect only."
          },
          {
            "name": "gap",
            "type": "<a href=\"/docs/types#slider-responsive-type\">SLIDER_RESPONSIVE</a>&lt;number | string&gt;",
            "default": "0",
            "description": "Space between slides, in pixels or any CSS length, or a value per screen size. Works with the \"slide\" effect only."
          },
          {
            "name": "peek",
            "type": "<a href=\"/docs/types#slider-responsive-type\">SLIDER_RESPONSIVE</a>&lt;number | string&gt;",
            "default": "0",
            "description": "Width of the previous and next slides shown at the edges, in pixels or any CSS length, or a value per screen size. Works with the \"slide\" effect only."
          },
          {
            "name": "centered",
            "type": "boolean",
            "default": "false",
            "description": "Places the active slide in the middle. Works with the \"slide\" effect only."
          },
          {
            "name": "controls",
            "type": "boolean",
            "default": "true",
            "description": "Shows the previous and next buttons."
          },
          {
            "name": "indicator",
            "type": "boolean",
            "default": "true",
            "description": "Shows a dot for each slide."
          },
          {
            "name": "thumbnails",
            "type": "boolean",
            "default": "false",
            "description": "Shows a strip of thumbnails under the slider."
          },
          {
            "name": "timer",
            "type": "boolean",
            "default": "true",
            "description": "Shows a progress bar until the next slide while auto play is on."
          },
          {
            "name": "fraction",
            "type": "boolean",
            "default": "false",
            "description": "Shows a counter like \"2 / 5\"."
          },
          {
            "name": "pauseButton",
            "type": "boolean",
            "default": "true",
            "description": "Shows a button that stops and restarts auto play."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "\"Slider\"",
            "description": "Accessible name of the slider. Describe what the slides show."
          },
          {
            "name": "slideClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for every slide."
          },
          {
            "name": "controlButtonClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the previous and next buttons."
          },
          {
            "name": "indicatorContainerClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the container of the dots."
          },
          {
            "name": "indicatorClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for every dot."
          },
          {
            "name": "indicatorActiveClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes added to the dot of the active slide."
          },
          {
            "name": "thumbnailContainerClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the thumbnail strip."
          },
          {
            "name": "thumbnailClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for every thumbnail."
          },
          {
            "name": "thumbnailActiveClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes added to the thumbnail of the active slide."
          },
          {
            "name": "timerClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the timer bar."
          },
          {
            "name": "fractionClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the fraction counter."
          },
          {
            "name": "pauseButtonClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the pause button."
          },
          {
            "name": "overlayClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the container of the overlay snippet."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the slider element, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The Slide components."
          },
          {
            "name": "prevButton",
            "description": "Custom content of the previous button, like an icon."
          },
          {
            "name": "nextButton",
            "description": "Custom content of the next button, like an icon."
          },
          {
            "name": "overlay",
            "description": "Content that stays on top while the slides change, like a hero title and button."
          }
        ]
      }
    ],
    "slide": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "src",
            "type": "string",
            "default": "undefined",
            "description": "Image of the slide. Without it, the slide shows its content."
          },
          {
            "name": "alt",
            "type": "string",
            "default": "undefined",
            "description": "Alternative text of the image. Use an empty string for a decorative image."
          },
          {
            "name": "href",
            "type": "string",
            "default": "undefined",
            "description": "Makes the whole slide a link, named by the image alt or the slide content."
          },
          {
            "name": "thumbnail",
            "type": "string",
            "default": "undefined",
            "description": "Image for the thumbnail of this slide. Defaults to src."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the slide, merged with the default classes and slideClasses."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Custom content of the slide, used when src is not set."
          }
        ]
      }
    ]
  }
</script>
