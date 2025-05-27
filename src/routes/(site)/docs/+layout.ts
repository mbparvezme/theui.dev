import type { LayoutServerLoad } from './$types';
import { PUBLIC_GITHUB_BASE } from '$env/static/public';

interface ComponentData {
  [key: string]: unknown;
}

export const load: LayoutServerLoad = async ({ fetch, url }) => {
  let responseData: ComponentData = {};
  let editURL = "";
  const noJsonData = ['installation', 'z-index', 'rtl', 'accessibility', 'types', 'license'];

  try {
    const components = await fetch("/data/components.json", {headers: { "Accept": "application/json" }}).then(data => data.json());
    const segment: string[] = url.pathname.split('/').filter((part: string) => part !== '');
    const lastSegment = segment.at(-1) ?? '';

    if (segment.length > 1) {
      if (lastSegment && !noJsonData.includes(lastSegment)) {
        const data = await getData(fetch, lastSegment);
        if (data) {
          responseData = data;
        }
      }
      editURL = PUBLIC_GITHUB_BASE + (lastSegment === "docs" ? "introduction" : lastSegment);
    }

    if (lastSegment == "colors"){
      return { components, colors: responseData, editURL};
    }else{
      return { components, component: responseData, editURL };
    }
  } catch (error) {
    console.error("Error loading data:", error);
    return { components: [], component: {}, editURL: "" };
  }
};

const getData = async (fetch: typeof window.fetch, segment: string): Promise<ComponentData | undefined> => {
  try {
    const url = segment == "colors" ? "/data/colors.json" : `/data/components/${segment}.json`
    const res = await fetch(url, {headers: { "Accept": "application/json" }});

    if (!res.ok) {
      if (res.status === 404) {
        console.warn(`Resource ${segment} not found.`);
      } else {
        console.error(`Failed to fetch resource from ${segment}: ${res.status} ${res.statusText}`);
      }
      return undefined;
    }
    return await res.json() as ComponentData;
  } catch (error) {
    console.error(`Error fetching data for ${segment}:`, error);
    return undefined;
  }
};