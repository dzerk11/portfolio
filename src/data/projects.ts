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
}

export const projects: Project[] = [
  {
    title: 'UEFN Show Reel',
    description:
      'Placeholder description: a reel of gameplay experiences designed and built in Unreal Editor for Fortnite over two years of UEFN development.',
    tags: ['UEFN', 'Verse', 'Game Design'],
    showreelId: 'TgDiqtFA-7A',
  },
  {
    title: 'PRO TRIO Cup Endgame',
    description:
      'Placeholder description: a published Fortnite island for competitive trio endgame practice — tournament-style point system, team lobbies and custom-built terrain, all scripted in Verse.',
    tags: ['UEFN', 'Verse', 'Game Design'],
    image: asset('images/pro-trio-cup-1.webp'),
    gallery: [asset('images/pro-trio-cup-2.webp'), asset('images/pro-trio-cup-3.webp')],
  },
  {
    title: 'Industry 4.0 Monitoring Platform',
    description:
      'Placeholder description: fullstack production-monitoring platform connecting industrial machinery to real-time dashboards via Kepware, ThingWorx and InfluxDB.',
    tags: ['ThingWorx', 'Kepware', 'InfluxDB', 'Vue.js', 'Docker'],
    image: asset('images/project-placeholder-2.svg'),
    link: '#',
  },
]
