import type { LayoutServerLoad } from './$types';
// import { PUBLIC_GITHUB_BASE } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  try {
    // const components = await fetch("/data/components.json", { headers: { "Accept": "application/json" } }).then(data => data.json());
    let blockCategories: unknown;
    const segment: Array<string> = url.pathname.split('/').filter((part: string) => part !== '');
    const lastSegment = segment.at(-1);
    if (lastSegment && lastSegment == "ui-blocks"){
      const blockResponse = await fetch(`/data/ui-blocks.json`, {
        headers: { "Accept": "application/json" },
      });
      if (!blockResponse.ok) {
        if (blockResponse.status === 404) {
          console.warn(`Component ${lastSegment} not found.`);
        } else {
          throw new Error(`Failed to fetch component ${lastSegment}: ${blockResponse.status} ${blockResponse.statusText}`);
        }
      } else {
        blockCategories = await blockResponse.json()
      }
    }

    return { blockCategories };
  } catch (error) {
    console.error("Error loading data:", error);
    return { components: [], component: {}, editURL: "" };
  }
};