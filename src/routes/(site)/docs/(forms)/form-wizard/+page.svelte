<SEO title="Form Wizard" description={metadata.description} keywords={metadata.tags?.join(", ")} />
<Page {component} />

<script lang="ts">
  import SEO from "$lib/SEO.svelte"
  import Page, { metadata } from "$lib/pages/form-wizard.svx"

  const component = {
    "wizard": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "step",
            "type": "number",
            "default": "1",
            "description": "The current step, starting from 1. Bindable with <code>bind:step</code>."
          },
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "default": "\"horizontal\"",
            "description": "Puts the steps across the top or down the side. A vertical header stacks on a narrow screen."
          },
          {
            "name": "header",
            "type": "boolean",
            "default": "true",
            "description": "Shows the numbered steps."
          },
          {
            "name": "controls",
            "type": "boolean",
            "default": "true",
            "description": "Shows the Back and Next buttons."
          },
          {
            "name": "linear",
            "type": "boolean",
            "default": "true",
            "description": "A step can only be opened once the steps before it are done. With false, any step can be clicked."
          },
          {
            "name": "backText",
            "type": "string",
            "default": "\"Back\"",
            "description": "Text of the back button."
          },
          {
            "name": "nextText",
            "type": "string",
            "default": "\"Next\"",
            "description": "Text of the next button."
          },
          {
            "name": "finishText",
            "type": "string",
            "default": "\"Finish\"",
            "description": "Text of the next button on the last step."
          },
          {
            "name": "ariaLabel",
            "type": "string",
            "default": "\"Steps\"",
            "description": "Accessible name of the list of steps."
          },
          {
            "name": "onchange",
            "type": "(step: number) => void",
            "default": "undefined",
            "description": "Runs with the new step number every time the step changes."
          },
          {
            "name": "onfinish",
            "type": "() => void",
            "default": "undefined",
            "description": "Runs when the button is pressed on the last step and its checks pass."
          },
          {
            "name": "headerClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the list of steps."
          },
          {
            "name": "indicatorClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for every step number."
          },
          {
            "name": "activeIndicatorClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes added to the number of the current step."
          },
          {
            "name": "completeIndicatorClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes added to the number of a finished step."
          },
          {
            "name": "stepClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for every step."
          },
          {
            "name": "controlsClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the row of buttons."
          },
          {
            "name": "buttonClasses",
            "type": "string",
            "default": "\"\"",
            "description": "Custom classes for the back and next buttons."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the wizard element, merged with the default classes."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "The FormStep components."
          }
        ]
      },
      {
        "key": "functions",
        "title": "Functions",
        "data": null
      }
    ],
    "step": [
      {
        "key": "props",
        "title": "Props",
        "data": [
          {
            "name": "title",
            "type": "string",
            "default": "undefined",
            "description": "Name of the step, shown under its number and used as the accessible name of the step."
          },
          {
            "name": "description",
            "type": "string",
            "default": "undefined",
            "description": "Smaller text under the title."
          },
          {
            "name": "optional",
            "type": "boolean",
            "default": "false",
            "description": "Marks the step as optional in the header."
          },
          {
            "name": "validate",
            "type": "() => boolean | Promise&lt;boolean&gt;",
            "default": "undefined",
            "description": "Runs before the wizard moves on. Return false to stay on this step. It may be async."
          }
        ]
      },
      {
        "key": "dynamicProps",
        "title": "Dynamic props",
        "data": [
          {
            "name": "class",
            "description": "Classes for the step, merged with the default classes and stepClasses."
          }
        ]
      },
      {
        "key": "snippets",
        "title": "Snippets",
        "data": [
          {
            "name": "children",
            "description": "Content of the step, usually the form fields."
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
