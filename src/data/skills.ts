export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Industrial / IoT',
    skills: ['ThingWorx', 'Kepware', 'Industry 4.0', 'OPC UA'],
  },
  {
    label: 'Data & Databases',
    skills: ['PostgreSQL', 'InfluxDB'],
  },
  {
    label: 'DevOps',
    skills: ['Docker', 'GitLab CI/CD'],
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
