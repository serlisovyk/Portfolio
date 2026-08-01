import { SiGmail, SiGithub, SiTelegram, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import {
  EMAIL_ADDRESS,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TELEGRAM_LINK,
  INSTAGRAM_LINK,
} from '@/shared/constants'

export const SOCIAL_ITEMS = [
  {
    title: 'Gmail',
    icon: <SiGmail size={22} aria-hidden={true} />,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    title: 'Github',
    icon: <SiGithub size={22} aria-hidden={true} />,
    href: GITHUB_LINK,
  },
  {
    title: 'Linkedin',
    icon: <FaLinkedin size={22} aria-hidden={true} />,
    href: LINKEDIN_LINK,
  },
  {
    title: 'Telegram',
    icon: <SiTelegram size={22} aria-hidden={true} />,
    href: TELEGRAM_LINK,
  },
  {
    title: 'Instagram',
    icon: <SiInstagram size={22} aria-hidden={true} />,
    href: INSTAGRAM_LINK,
  },
]
