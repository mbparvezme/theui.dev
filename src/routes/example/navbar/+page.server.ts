import type { PageServerLoad } from './$types';

// The navbar docs embed this page several times, each with a different ?q=, so it
// answers per request and is the one page the site does not prerender.
export const prerender = false;

export const load: PageServerLoad = ({ url }) => {
  const navType = url.searchParams.get('q');
  return {navType}
}
