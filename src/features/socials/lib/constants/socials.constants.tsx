import { SiGithub, SiGmail, SiLinkedin, SiTelegram } from 'react-icons/si'
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TELEGRAM_LINK,
} from '@/shared/constants'

export const SOCIAL_ITEMS = [
  {
    title: 'Gmail',
    icon: <SiGmail size={22} aria-hidden={true} />,
    href: EMAIL_LINK,
  },
  {
    title: 'Github',
    icon: <SiGithub size={22} aria-hidden={true} />,
    href: GITHUB_LINK,
  },
  {
    title: 'Linkedin',
    icon: <SiLinkedin size={22} aria-hidden={true} />,
    href: LINKEDIN_LINK,
  },
  {
    title: 'Telegram',
    icon: <SiTelegram size={22} aria-hidden={true} />,
    href: TELEGRAM_LINK,
  },
]
