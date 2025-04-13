import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
  const navType = url.searchParams.get('q');
  return {navType}
}