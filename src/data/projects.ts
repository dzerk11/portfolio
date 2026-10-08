export interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  /** Extra screenshots shown below the description */
  gallery?: string[]
  link?: string
  /** Text of the link button, defaults to "View project" */
  linkLabel?: string
  /** YouTube video ID for an embedded show reel */
  showreelId?: string
  /** Kept in the data but not rendered on the site */
  hidden?: boolean
}

export const projects: Project[] = [
  {
    title: 'Amer Plants: Warehouse Automation Platform',
    description:
      'In one of AMER\'s automated warehouses, routes over 600 pallets a day across 53 conveyors, with the routing logic in PostgreSQL so every application gets the same decision. When the earlier ThingWorx screens hit their limits, they were rebuilt as a full-stack application that unifies data from AMER\'s automated warehouses, its mobile robot and the MES, flags known faults automatically, and gives operators a chatbot with live access to that data through an MCP server.',
    tags: ['PostgreSQL', 'Node.js', 'OPC UA', 'MCP', 'Docker'],
  },
  {
    title: 'Machine & Test Bench Integration',
    description:
      'Connects over 30 production machines to the MES and WMS, so each one gets its order and recipe automatically and sends processing data back. Among them are 7 end-of-line test benches at two plants: their results make thousands of motors a week traceable for compliance, and an operator view compares each running test against past results to spot anomalies.',
    tags: ['ThingWorx', 'Kepware', 'OPC UA', 'Python', 'PostgreSQL', 'InfluxDB'],
    hidden: true,
  },
  {
    title: 'IoT Platform & Observability, Built from Scratch',
    description:
      'Automation used to run entirely on one vendor-managed ThingWorx server, with no version control, containers or pipelines. Built a containerized platform around it: ThingWorx still interconnects the main machines, while new services go through GitLab CI/CD to a test environment before production, over 50 containers run behind Traefik, and a Grafana, Prometheus and Loki stack monitors the servers. The IT and BI teams later adopted the monitoring too.',
    tags: ['Docker', 'GitLab CI/CD', 'Traefik', 'Linux', 'Grafana', 'Prometheus', 'Loki'],
    hidden: true,
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
    hidden: true,
  },
  {
    title: 'MT5 Trading Analytics Dashboard',
    description:
      'Personal project: converted a trading strategy into a custom MQL5 indicator, then built a bot streaming live trade and account data from MetaTrader 5 into Node-RED flows, feeding a real-time Vue.js dashboard shared with a small group of users.',
    tags: ['MQL5', 'Node-RED', 'Vue.js', 'Node.js'],
    hidden: true,
  },
  {
    title: 'Among Us-Style Map for Fortnite',
    description:
      'An Among Us-style map built in Unreal Editor for Fortnite, with about 15,000 lines of Verse covering tasks, sabotages, emergency meetings and voting. It was built before UEFN supported UI events and advanced customization, so it runs on its own event bus and UI framework.',
    tags: ['UEFN', 'Verse', 'Game Design'],
    showreelId: 'TgDiqtFA-7A',
    link: 'https://github.com/dzerk11/uefn-impostor-map',
    linkLabel: 'View code',
  },
]
