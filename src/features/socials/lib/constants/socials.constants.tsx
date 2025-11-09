import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from 'react-icons/si'

export const SOCIAL_ITEMS = [
  {
    title: 'Gmail',
    icon: <SiGmail size={22} aria-hidden={true} />,
    href: 'mailto:serlesovik@gmail.com',
  },
  {
    title: 'Github',
    icon: <SiGithub size={22} aria-hidden={true} />,
    href: 'https://github.com/serlisovyk',
  },
  {
    title: 'Linkedin',
    icon: <SiLinkedin size={22} aria-hidden={true} />,
    href: 'https://www.linkedin.com/in/serhii-lisovyk-b43a4b29b/',
  },
  {
    title: 'Telegram',
    icon: <SiTelegram size={22} aria-hidden={true} />,
    href: 'https://t.me/serlisovyk',
  },
]
