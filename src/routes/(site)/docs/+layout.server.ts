import type { LayoutServerLoad } from './$types';
import { PUBLIC_GITHUB_BASE } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  let component: Record<string, any> = {}; // More specific type for component
  let editURL = "";

  try {
    const components = await fetch("/data/components.json", {headers: { "Accept": "application/json" }}).then(data => data.json());
    const segment: Array<string> = url.pathname.split('/').filter((part: string) => part !== '');
    if (segment.length > 1) {
      const noJsonData = ['installation', 'colors', 'z-index', 'rtl', 'accessibility', 'types', 'license'];
      const lastSegment = segment.at(-1);
      if (lastSegment && !noJsonData.includes(lastSegment)){
        const componentResponse = await fetch(`/data/components/${lastSegment}.json`, {
          headers: { "Accept": "application/json" },
        });
        if (!componentResponse.ok) {
          if (componentResponse.status === 404) {
            console.warn(`Component ${lastSegment} not found.`);
          } else {
            throw new Error(`Failed to fetch component ${lastSegment}: ${componentResponse.status} ${componentResponse.statusText}`);
          }
        } else {
          component = await componentResponse.json();
        }
      }
      editURL = PUBLIC_GITHUB_BASE + (lastSegment === "docs" ? "introduction" : lastSegment ?? "");
    }
    return { components, component, editURL };
  } catch (error) {
    console.error("Error loading data:", error);
    return { components: [], component: {}, editURL: "" };
  }
};