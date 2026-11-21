// Builds an internal link that also works if the site is served from a sub-folder ("base").
export const url = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + path;
