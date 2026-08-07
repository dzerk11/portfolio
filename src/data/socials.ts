export interface Social {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export const email = 'dav.zat.00@gmail.com'

export const socials: Social[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/dzerk11',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/davide-zattra-0227b839b/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${email}`,
    icon: 'mail',
  },
]
