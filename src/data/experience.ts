export interface Experience {
  role: string
  company: string
  location: string
  period: string
  current: boolean
  summary: string
  highlights: string[]
  tags: string[]
  /** Anchor of a section showing related work, e.g. '#projects' */
  relatedAnchor?: string
}

export interface Education {
  title: string
  school: string
  period: string
  note?: string
}

export const education: Education[] = [
  {
    title: 'Higher Technical Diploma — Industrial Production Process Digitalization',
    school: 'ITS Academy Meccatronico Veneto',
    period: '2019 — 2021',
    note: 'Final grade 100/100',
  },
  {
    title: 'Technical Diploma — Electronics & Automation',
    school: 'ITT G. Chilesotti',
    period: '2014 — 2019',
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
    role: 'Automation & Digitalization Technician 5.0',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: '2021 — Present',
    current: true,
    summary:
      'Placeholder summary: building Industry 4.0/5.0 solutions connecting industrial machinery to modern data platforms and web dashboards.',
    highlights: [
      'Placeholder: integrated PLC data acquisition via Kepware and OPC UA.',
      'Placeholder: developed ThingWorx mashups and services for production monitoring.',
      'Placeholder: built fullstack dashboards with Vue.js, Node.js, PostgreSQL and InfluxDB.',
      'Placeholder: containerized deployments with Docker and GitLab CI/CD pipelines.',
    ],
    tags: ['ThingWorx', 'Kepware', 'PostgreSQL', 'InfluxDB', 'Docker', 'Vue.js', 'Node.js'],
    relatedAnchor: '#projects',
  },
  {
    role: 'UEFN Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Dec 2023 — Present',
    current: true,
    summary:
      'Placeholder summary: designing and developing game experiences in Unreal Editor for Fortnite as a freelancer alongside my industry role.',
    highlights: [
      'Placeholder: shipped multiple published islands with custom gameplay mechanics.',
      'Placeholder: wrote gameplay logic in Verse.',
      'Placeholder: produced a show reel of released projects.',
    ],
    tags: ['UEFN', 'Verse', 'Game Design'],
    relatedAnchor: '#projects',
  },
  {
    role: 'Automation & Digitalization Technician',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: '2019 — 2021',
    current: false,
    summary:
      'Placeholder summary: first role in industrial automation, in parallel with the ITS higher technical program.',
    highlights: [
      'Placeholder: supported machine data acquisition and automation projects.',
      'Placeholder: worked with PLCs, sensors and industrial protocols.',
    ],
    tags: ['Industry 4.0', 'PLC', 'OPC UA'],
  },
]
