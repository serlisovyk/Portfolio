export interface Project {
  id: string
  title: string
  text: string
  image: ProjectImage
  tags: string[]
  demo: string
  repository: string
}

interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectCardProps {
  project: Project
}
