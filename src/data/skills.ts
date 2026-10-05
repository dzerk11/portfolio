export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Industrial IoT & Integration',
    skills: ['ThingWorx', 'Kepware', 'OPC UA', 'REST', 'Siemens S7'],
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'GitLab CI/CD', 'Linux', 'Traefik', 'AWS'],
  },
  {
    label: 'Backend',
    skills: ['PostgreSQL', 'JavaScript', 'Node.js', 'Python', 'InfluxDB'],
  },
  {
    label: 'Observability',
    skills: ['Grafana', 'Prometheus', 'Loki'],
  },
  {
    label: 'AI Integration',
    skills: ['Claude Code', 'MCP', 'YOLO Object Detection', 'Antigravity'],
  },
  {
    label: 'Frontend',
    skills: ['Vue.js', 'Figma'],
  },
  {
    label: 'Game Development',
    skills: ['UEFN', 'Verse'],
  },
]
