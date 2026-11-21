// Add your publications here, newest first or in any order (the page sorts by year).
// Leave the array empty to show a friendly "coming soon" message instead.

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  link?: string;
};

export const publications: Publication[] = [
  // Example (delete this comment and add your real papers):
  // {
  //   year: 2026,
  //   authors: 'Kim, D.',
  //   title: 'Title of the paper',
  //   venue: 'Journal Name, 12(3), 100-110',
  //   link: 'https://doi.org/...',
  // },
];
