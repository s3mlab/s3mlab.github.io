// People page content. Add students and collaborators to the arrays below when ready.

export const pi = {
  name: 'Dongwook Kim, PhD, MSW, MA, LGSW',
  initials: 'DK',
  role: 'Founder & Director',
  title: 'Assistant Professor of Social Work, University of South Alabama',
  bio: [
    'Dongwook Kim is an Assistant Professor of Social Work at the University of South Alabama. His research focuses on stigma reduction and resilience building in social work and public health settings, particularly in relation to HIV/AIDS.',
    'His work draws on quantitative and qualitative approaches, including causal inference, ethnography, program evaluation, and computational text analysis. Before his academic career, he spent more than 13 years in community health and human service practice with global nonprofit organizations.',
    'He earned his PhD in Social Work from Arizona State University, an MSW from the University of Minnesota, an MA in Conflict, Security and Development from King’s College London, and a BA in English and Political Science from Korea University. He also holds a second baccalaureate in Statistics and Data Science from Korea National Open University.',
  ],
};

export type Person = {
  name: string;
  role: string;
  note?: string;
};

// Example: { name: 'Jane Doe', role: 'MSW Research Assistant', note: 'Interested in stigma measurement.' }
export const students: Person[] = [];
export const collaborators: Person[] = [];
