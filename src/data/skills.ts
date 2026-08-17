export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Industrial / IoT',
    skills: ['ThingWorx', 'Kepware', 'Industrial IoT', 'OPC UA'],
  },
  {
    label: 'Data & Databases',
    skills: ['PostgreSQL', 'InfluxDB'],
  },
  {
    label: 'DevOps & Observability',
    skills: ['Docker', 'GitLab CI/CD', 'Traefik', 'Grafana', 'Prometheus', 'Loki'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend & Backend',
    skills: ['Vue.js', 'Node.js'],
  },
  {
    label: 'Game Development',
    skills: ['UEFN', 'Verse'],
  },
]
