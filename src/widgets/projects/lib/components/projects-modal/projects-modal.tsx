'use client'

import Image from 'next/image'
import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Tags from '@/shared/ui/tags'
import { ProjectModalProps } from '../../types'

function useLockBody(lock: boolean) {
  useEffect(() => {
    if (!lock) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [lock])
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const open = !!project

  useLockBody(open)

  const dialogRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const labelId = useId()
  const descId = useId()

  useEffect(() => {
    setIdx(0)
  }, [project])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight')
        setIdx((i) => Math.min(i + 1, (project?.images.length ?? 1) - 1))
      if (e.key === 'ArrowLeft') setIdx((i) => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, project, onClose])

  useEffect(() => {
    if (!open || !dialogRef.current) return
    const el = dialogRef.current
    const focusable = el.querySelectorAll<HTMLElement>(
      'a,button,[tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusable.length === 0) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    el.addEventListener('keydown', trap)
    first?.focus()
    return () => el.removeEventListener('keydown', trap)
  }, [open])

  if (!open || !project) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-labelledby={labelId}
      aria-describedby={descId}
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        ref={dialogRef}
        className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-4 shadow-xl dark:bg-zinc-900 sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 id={labelId} className="text-xl font-semibold">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            Закрити
          </button>
        </div>

        <div className="mt-4">
          <div className="relative">
            <Image
              src={project.images[idx].src}
              alt={project.images[idx].alt}
              width={1280}
              height={800}
              className="h-[40vh] w-full rounded-lg object-cover sm:h-[50vh]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
              priority={false}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
              <button
                onClick={() => setIdx((i) => Math.max(i - 1, 0))}
                disabled={idx === 0}
                className="pointer-events-auto rounded-full bg-black/60 p-2 text-white transition disabled:opacity-40"
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setIdx((i) => Math.min(i + 1, project.images.length - 1))
                }
                disabled={idx === project.images.length - 1}
                className="pointer-events-auto rounded-full bg-black/60 p-2 text-white transition disabled:opacity-40"
                aria-label="Следующее фото"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto">
            {project.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setIdx(i)}
                className={`shrink-0 overflow-hidden rounded-md border ${
                  i === idx ? 'border-secondary' : 'border-transparent'
                }`}
                aria-label={`Показать изображение ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={120}
                  height={76}
                  className="h-16 w-28 object-cover"
                />
              </button>
            ))}
          </div>

          <div id={descId} className="mt-4 space-y-3">
            <p className="text-zinc-600 dark:text-zinc-300">{project.excerpt}</p>

            <ul className="flex flex-wrap gap-2">
              <Tags items={project.tags} />
            </ul>

            <div className="flex gap-3 pt-1">
              {project.demo && (
                <a
                  className="rounded-md border border-secondary px-4 py-2 text-sm transition hover:bg-primary-contrast hover:text-primary"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              {project.repo && (
                <a
                  className="rounded-md border border-zinc-300 px-4 py-2 text-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
