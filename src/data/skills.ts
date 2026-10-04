export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Industrial IoT & Integration',
    skills: ['OPC UA', 'Kepware', 'ThingWorx', 'MES Integration', 'FANUC FOCAS', 'SOAP / REST'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'Fastify', 'C#'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Vue.js', 'Vite'],
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'GitLab CI/CD', 'Traefik', 'Ansible', 'Linux', 'AWS (S3, CloudFront)'],
  },
  {
    label: 'Data & Observability',
    skills: ['PostgreSQL', 'PL/pgSQL', 'InfluxDB', 'Grafana', 'Prometheus', 'Loki'],
  },
  {
    label: 'AI Integration',
    skills: ['MCP (Model Context Protocol)', 'ONNX Inference', 'AI-Assisted Development (Claude Code)'],
  },
  {
    label: 'Game Development',
    skills: ['UEFN', 'Verse'],
  },
]
