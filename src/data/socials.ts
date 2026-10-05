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
    href: 'https://www.linkedin.com/in/davidezattra/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${email}`,
    icon: 'mail',
  },
]
