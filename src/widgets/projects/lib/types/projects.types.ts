export interface Project {
  id: string
  title: string
  excerpt: string
  images: ProjectImage[]
  tags: string[]
  demo?: string
  repo?: string
}

interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectCardProps {
  project: Project
  handleOpen: (p: Project) => void
}

export interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}