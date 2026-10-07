export interface Experience {
  role: string
  company: string
  location: string
  period: string
  current: boolean
  summary: string
  /** Keep each to one or two lines; wrap a key result in **double asterisks** to bold it */
  highlights: string[]
  /** Earlier role at the same company, listed under the current one */
  previousRole?: { role: string; period: string; note: string }
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

export interface Language {
  name: string
  level: string
}

export const education: Education[] = [
  {
    title: 'Higher Technical Diploma, Industrial Production Process Digitalization',
    school: 'ITS Academy Meccatronico Veneto',
    period: '2019 – 2021',
    note: '2-year post-secondary program (EQF level 5) · Final grade 100/100',
  },
  {
    title: 'Technical Diploma, Electronics & Automation',
    school: 'ITT G. Chilesotti',
    period: '2014 – 2019',
    note: 'Two-time RoboCup Italian national finalist',
  },
]

export const certifications: Education[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    school: 'Amazon Web Services',
    period: 'In progress',
  },
]

export const languages: Language[] = [
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Italian', level: 'Native' },
]

export const experiences: Experience[] = [
  {
    role: 'Software Engineer, Industrial IoT',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: 'Aug 2021 – Present',
    current: true,
    summary:
      'Own how machines and production systems share data, from designing the integrations to developing and running them.',
    highlights: [
      'Made thousands of motors a week traceable for compliance by connecting **over 30 production machines** to the MES and WMS: each one gets its order and recipe automatically and sends processing data back, while operator dashboards help spot anomalies (ThingWorx, Kepware/OPC UA, custom Docker apps).',
      'Designed a pallet-routing system for an automated warehouse (600+ pallets a day on 53 conveyors) and the full-stack application around it, which combines data from **about 10 systems** in real time, flags known faults automatically, and gives an operator chatbot access to live plant data (MCP) for support and maintenance.',
      'Introduced a delivery pipeline: every change is deployed automatically to a test environment and checked before it\'s promoted to production, across **over 50 containers** (GitLab CI/CD, Docker, Traefik).',
      'Set up monitoring and centralized logs (Grafana, Prometheus, Loki), later also adopted by the IT and BI teams.',
    ],
    previousRole: {
      role: 'Automation & Digitalization Technician (Internship)',
      period: 'Aug 2019 – Aug 2021',
      note: 'Machine data acquisition and integration.',
    },
    tags: [
      'TypeScript',
      'Python',
      'OPC UA',
      'ThingWorx',
      'PostgreSQL',
      'Docker',
      'GitLab CI/CD',
      'Traefik',
      'Grafana',
      'Ansible',
    ],
    relatedAnchor: '#projects',
  },
  {
    role: 'Game Developer (UEFN)',
    company: 'Freelance',
    location: 'Remote',
    period: 'Dec 2023 – Mar 2026',
    current: false,
    summary:
      'Developed custom game mechanics in Verse for client-commissioned Fortnite projects.',
    highlights: [],
    tags: ['UEFN', 'Verse', 'Fortnite', 'Game Design'],
    relatedAnchor: '#projects',
  },
]
