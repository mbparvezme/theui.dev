import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ fetch, url  }) => {
  let component: object = {}
  const res = await fetch("/data/components.json", {
    headers: { "Accept": "application/json" },
  }).then(data => data.json());

  const segment: Array<string> = url.pathname.split('/').filter((part: string) => part !== '');
  if (segment.length > 1){
    const componentContent = await fetch(`/data/components/${segment[segment.length - 1]}.json`, {
      headers: { "Accept": "application/json" },
    })

    if (componentContent.ok) {
      component = await componentContent.json();
    }
  }
  return { components: res, component }
}
