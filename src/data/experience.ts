export interface Experience {
  role: string
  company: string
  location: string
  period: string
  current: boolean
  summary: string
  highlights: string[]
  tags: string[]
}

export interface Education {
  title: string
  school: string
  period: string
  note?: string
}

export const education: Education[] = [
  {
    title: 'Higher Technical Diploma — Mechatronics',
    school: 'ITS Academy Meccatronico Veneto',
    period: '2019 — 2021',
  },
  {
    title: 'Cambridge English B2 First',
    school: 'Cambridge English',
    period: 'May 2021',
    note: 'Score 170',
  },
]

export const experiences: Experience[] = [
  {
    role: 'Automation / IoT & Fullstack Developer',
    company: 'AMER S.p.A.',
    location: 'Vicenza, Italy',
    period: '2023 — Present',
    current: true,
    summary:
      'Placeholder summary: building Industry 4.0 solutions connecting industrial machinery to modern data platforms and web dashboards.',
    highlights: [
      'Placeholder: integrated PLC data acquisition via Kepware and OPC UA.',
      'Placeholder: developed ThingWorx mashups and services for production monitoring.',
      'Placeholder: built fullstack dashboards with Vue.js, Node.js, PostgreSQL and InfluxDB.',
      'Placeholder: containerized deployments with Docker and GitLab CI/CD pipelines.',
    ],
    tags: ['ThingWorx', 'Kepware', 'PostgreSQL', 'InfluxDB', 'Docker', 'Vue.js', 'Node.js'],
  },
  {
    role: 'UEFN Developer',
    company: 'Placeholder Studio',
    location: 'Remote',
    period: '2021 — 2023',
    current: false,
    summary:
      'Placeholder summary: designed and developed game experiences in Unreal Editor for Fortnite over two years.',
    highlights: [
      'Placeholder: shipped multiple published islands with custom gameplay mechanics.',
      'Placeholder: wrote gameplay logic in Verse.',
      'Placeholder: produced a show reel of released projects.',
    ],
    tags: ['UEFN', 'Verse', 'Game Design'],
  },
]
