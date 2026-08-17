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
    period: 'Aug 2021 — Present',
    current: true,
    summary:
      'Building and running the Industry 4.0 platform that connects production machinery to warehouse logistics and real-time monitoring.',
    highlights: [
      'Integrate industrial automation systems with warehouse logistics.',
      'Build real-time PLC monitoring tools with OPC UA and Python.',
      'Run the observability stack: Grafana, Loki, Prometheus, Alloy.',
      'Set up CI/CD pipelines with GitLab, Docker, and Traefik.',
      'Develop backend services in ThingWorx, PostgreSQL, Python, and Node.js.',
    ],
    tags: ['ThingWorx', 'OPC UA', 'Python', 'PostgreSQL', 'Node.js', 'Grafana', 'GitLab CI/CD', 'Docker', 'Traefik'],
    relatedAnchor: '#projects',
  },
  {
    role: 'UEFN Developer',
    company: 'Epic Games Fortnite · Freelance',
    location: 'Remote',
    period: 'Dec 2023 — Mar 2026',
    current: false,
    summary:
      'Designed and developed game experiences in Unreal Editor for Fortnite as a freelancer alongside my main role.',
    highlights: [
      'Shipped published islands with custom gameplay mechanics.',
      'Wrote gameplay logic in Verse.',
      'Produced a show reel of released projects.',
    ],
    tags: ['UEFN', 'Verse', 'Fortnite', 'Game Design'],
    relatedAnchor: '#projects',
  },
  {
    role: 'Automation & Digitalization Technician — Internship',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: 'Aug 2019 — Aug 2021',
    current: false,
    summary:
      'Internship in industrial automation, in parallel with the ITS higher technical program.',
    highlights: [
      'Supported machine data acquisition and automation projects.',
      'Worked with PLCs, sensors and industrial protocols.',
    ],
    tags: ['Industry 4.0', 'PLC', 'OPC UA'],
  },
]
