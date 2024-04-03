import {PUBLIC_URL} from '@/config';

export default function withLinks(
  resource: any,
  links: Record<string, string>
) {
  return {
    ...resource,
    _links: Object.entries(links).reduce((acc, [rel, pathname]) => {
      const templated = pathname.includes('{');
      (acc as any)[rel] = {
        rel,
        href: PUBLIC_URL + pathname,
        templated: templated || undefined
      };
      return acc;
    }, {})
  };
}
