import { asset } from '@/lib/utils'

export interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  /** Extra screenshots shown below the description */
  gallery?: string[]
  link?: string
  /** YouTube video ID for an embedded show reel */
  showreelId?: string
  /** Kept in the data but not rendered on the site */
  hidden?: boolean
}

export const projects: Project[] = [
  {
    title: 'Amer Plants: Multi-Plant Integration Platform',
    description:
      'TypeScript platform unifying AMER\'s automated warehouse plants (WMS, warehouse control system, OPC UA via Kepware, an autonomous mobile robot and the MES) into one real-time operator dashboard, replacing the vendor ThingWorx screens. Cross-checks the systems against known failure patterns to self-correct inventory drift or surface what maintenance needs. Its pallet-routing core has run in production since January 2026 (~600 pallets/day); an MCP server exposes read-only plant diagnostics to an LLM assistant.',
    tags: ['TypeScript', 'React', 'Fastify', 'PostgreSQL', 'OPC UA', 'MCP', 'Docker'],
  },
  {
    title: 'Test Bench Integration: Traceability & Quality',
    description:
      'Integrates ~7 end-of-line test benches for electric motors, across two plants, with the MES: results stored for product traceability and compliance, time series kept for analysis, and an operator UI comparing the running test against historical distributions. Thousands of motors are tested every week.',
    tags: ['Python', 'FastAPI', 'OPC UA', 'Kepware', 'PostgreSQL', 'InfluxDB'],
  },
  {
    title: 'IoT Platform & Observability, Built from Scratch',
    description:
      'Took the automation department from a single vendor-installed ThingWorx instance to a versioned, containerized platform: GitLab CI/CD with test and production environments, Traefik, ~20 containerized services, a Grafana/Loki/Prometheus/Alloy stack rolled out to 10 hosts with Ansible, and restore-tested backups.',
    tags: ['Docker', 'GitLab CI/CD', 'Traefik', 'Ansible', 'Grafana', 'Prometheus', 'Loki'],
  },
  {
    title: 'Machine Connectivity & MES Integration',
    description:
      'Connects production machines to the MES: the machine loads the item and recipe of the open production order, and processing data is logged back. Done through ThingWorx/Kepware or custom agents, including a C# middleware for FANUC CNC lathes (FOCAS) written once and reused on three machines.',
    tags: ['ThingWorx', 'Kepware', 'C#', 'FANUC FOCAS', 'MES'],
  },
  {
    title: 'AI Diagnostic Assistant: Infrastructure & Deployment',
    description:
      'Containerized, deployed and operated the infrastructure for a multi-agent AI diagnostic assistant (Google ADK, local LLMs via Ollama) a colleague built for warehouse-automation troubleshooting: the CI/CD pipeline, Docker packaging, and its production connections to PostgreSQL and the Grafana Loki log pipeline.',
    tags: ['Docker', 'GitLab CI/CD', 'PostgreSQL', 'Grafana Loki'],
    hidden: true,
  },
  {
    title: 'Industrial Object Counting: Backend & Platform',
    description:
      'Built and deployed the backend platform for an industrial object-counting system: a FastAPI service handling authentication, session state and counting events from edge clients, containerized and served through Traefik, with a Vue.js operator frontend.',
    tags: ['FastAPI', 'Python', 'Docker', 'Traefik', 'Vue.js'],
  },
  {
    title: 'MT5 Trading Analytics Dashboard',
    description:
      'Personal project: converted a trading strategy into a custom MQL5 indicator, then built a bot streaming live trade and account data from MetaTrader 5 into Node-RED flows, feeding a real-time Vue.js dashboard shared with a small group of users.',
    tags: ['MQL5', 'Node-RED', 'Vue.js', 'Node.js'],
    hidden: true,
  },
  {
    title: 'UEFN Work: Fortnite Island Design',
    description:
      'A collection of Fortnite islands and gameplay experiences built in Unreal Editor for Fortnite over two years, including PRO TRIO Cup Endgame, a published island for competitive trio endgame practice, with a tournament-style point system, team lobbies and custom-built terrain, all scripted in Verse.',
    tags: ['UEFN', 'Verse', 'Game Design'],
    showreelId: 'TgDiqtFA-7A',
    gallery: [
      asset('images/pro-trio-cup-1.webp'),
      asset('images/pro-trio-cup-2.webp'),
      asset('images/pro-trio-cup-3.webp'),
    ],
  },
]
