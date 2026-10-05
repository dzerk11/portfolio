export interface Experience {
  role: string
  /** Title on the contract, shown next to a functional one */
  officialTitle?: string
  company: string
  location: string
  period: string
  current: boolean
  summary: string
  /** Keep each to one or two lines */
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
    role: 'Industrial IoT Software Developer, Platform Lead',
    officialTitle: 'Automation & Digitalization Technician 5.0',
    company: 'AMER S.p.A.',
    location: 'Valdagno, Italy',
    period: 'Aug 2021 – Present',
    current: true,
    summary:
      'Built AMER\'s industrial IoT and integration platform from scratch. Before it, automation ran on a single vendor-installed ThingWorx instance with no version control, containers or CI.',
    highlights: [
      'Technical lead of the digitalization team and main developer of the plant\'s integration platform.',
      'Integrated over 30 production machines with the MES, WMS and in-house services via ThingWorx/Kepware and custom agents (including a FANUC FOCAS middleware), among them 7 end-of-line test benches at two sites that trace thousands of motors a week for compliance.',
      'Built the pallet-routing system of an automated warehouse (routing logic in PostgreSQL), in production since January 2026 and routing over 600 pallets a day across 53 conveyors, with an MCP server for LLM diagnostics.',
      'Established the department\'s software delivery from scratch: GitLab CI/CD, Docker and Traefik across separate environments, now running over 50 containers.',
      'Run the observability stack (Grafana, Prometheus, Loki) on 10 hosts and keep restore-tested backups of production databases.',
    ],
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
    role: 'UEFN Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Dec 2023 – Mar 2026',
    current: false,
    summary:
      'Designed and developed game experiences in Unreal Editor for Fortnite as a freelancer alongside my main role.',
    highlights: [
      'Designed and coded published Fortnite islands in Verse, alongside my full-time role.',
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
    summary: 'Internship alongside the ITS higher technical program.',
    highlights: ['Worked on machine data acquisition and integration projects.'],
    tags: ['OPC UA', 'Data Acquisition'],
  },
]
