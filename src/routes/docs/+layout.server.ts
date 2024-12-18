import type { LayoutServerLoad } from './$types';
import { PUBLIC_GITHUB_BASE } from "$env/static/public";

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  let component: object = {};
  const components = await fetch("/data/components.json", {headers: { "Accept": "application/json" }}).then(data => data.json());

  const segment: Array<string> = url.pathname.split('/').filter((part: string) => part !== '');
  if (segment.length > 1) {
    const componentContent = await fetch(`/data/components/${segment[segment.length - 1]}.json`, {
      headers: { "Accept": "application/json" },
    });

    if (componentContent.ok) {
      component = await componentContent.json();
    }
  }
  return { components, component, editURL: PUBLIC_GITHUB_BASE + segment[segment.length - 1] + "/+page.svelte" };
}