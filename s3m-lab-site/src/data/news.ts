// News items. Newest first is not required; the pages sort by date.

export type NewsItem = {
  date: string; // YYYY-MM-DD
  title: string;
  body: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-12-01',
    title: 'The S³M Lab website goes live',
    body: 'On World AIDS Day, we are launching the Stigma Science & Social Medicine Lab website.',
  },
];
