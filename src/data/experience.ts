export interface Experience {
  role: string
  /** Title on the contract, shown next to a functional one */
  officialTitle?: string
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
    title: 'Higher Technical Diploma, Industrial Production Process Digitalization',
    school: 'ITS Academy Meccatronico Veneto',
    period: '2019 – 2021',
    note: 'Final grade 100/100',
  },
  {
    title: 'Technical Diploma, Electronics & Automation',
    school: 'ITT G. Chilesotti',
    period: '2014 – 2019',
    note: 'Two-time RoboCup Italian national finalist',
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
    role: 'Industrial IoT Software Developer, Platform Lead',
    officialTitle: 'Automation & Digitalization Technician 5.0',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: 'Aug 2021 – Present',
    current: true,
    summary:
      'Built AMER\'s industrial IoT and integration platform from scratch. Before it, automation ran on a single vendor-installed ThingWorx instance with no version control, containers or CI. Lead developer of the platform, supervising an ML engineer and interns.',
    highlights: [
      'Introduced Git, GitLab CI/CD, Docker and Traefik with separate test and production environments; the platform now runs ~20 containerized services with automated deploys.',
      'Built the pallet-routing system of an automated warehouse plant (routing logic in PostgreSQL), in production since January 2026 and moving ~600 pallets a day. Now replacing its ThingWorx screens with a TypeScript/React platform that unifies WMS, warehouse control system, OPC UA and an autonomous mobile robot.',
      'Integrated ~7 end-of-line motor test benches across two plants with the MES, storing test results for traceability and compliance; thousands of motors are tested every week.',
      'Connected ~30 production machines to the MES (recipe loaded from the open order, production data logged back) through ThingWorx/Kepware or custom agents in Python, Node.js and C#, including a FANUC FOCAS middleware reused on three CNC lathes.',
      'Run the observability stack (Grafana, Loki, Prometheus, Alloy) on 10 hosts via Ansible, with 60+ Grafana dashboards and restore-tested backups of production databases.',
    ],
    tags: [
      'TypeScript',
      'Python',
      'C#',
      'OPC UA',
      'ThingWorx',
      'PostgreSQL',
      'React',
      'Docker',
      'GitLab CI/CD',
      'Traefik',
      'Grafana',
      'Ansible',
    ],
    relatedAnchor: '#projects',
  },
  {
    role: 'UEFN Developer',
    company: 'Epic Games Fortnite · Freelance',
    location: 'Remote',
    period: 'Dec 2023 – Mar 2026',
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
    role: 'Automation & Digitalization Technician (Internship)',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: 'Aug 2019 – Aug 2021',
    current: false,
    summary:
      'Internship in industrial automation, in parallel with the ITS higher technical program.',
    highlights: [
      'Supported machine data acquisition and automation projects.',
      'Worked with PLCs, sensors and industrial protocols.',
    ],
    tags: ['Industrial Automation', 'PLC', 'OPC UA'],
  },
]
