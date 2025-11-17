'use client'

import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { PREVIEW_COUNT } from '../constants'

export function useSkillsAnimation() {
  const [isExpanded, setIsExpanded] = useState(false)

  const gridRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  const getExtraCards = useCallback(() => {
    if (!gridRef.current) return []

    const cards = Array.from(
      gridRef.current.querySelectorAll<HTMLElement>('[data-skill-card]')
    )

    return cards.slice(PREVIEW_COUNT)
  }, [])

  const collapse = () => {
    animationRef.current?.kill()

    const extraCards = getExtraCards()

    if (!extraCards.length) {
      setIsExpanded(false)
      return
    }

    animationRef.current = gsap.to(extraCards, {
      autoAlpha: 0,
      y: 16,
      duration: 0.35,
      stagger: 0.06,
      ease: 'power3.inOut',
      onComplete: () => setIsExpanded(false),
    })
  }

  const expand = useCallback(() => {
    animationRef.current?.kill()
    setIsExpanded(true)
  }, [])

  const toggleExpand = () => {
    if (isExpanded) collapse()
    else expand()
  }

  useLayoutEffect(() => {
    if (!isExpanded) return

    const newCards = getExtraCards()

    if (!newCards.length) return

    animationRef.current = gsap.fromTo(
      newCards,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    )

    return () => void animationRef.current?.kill()
  }, [getExtraCards, isExpanded])

  return { gridRef, isExpanded, toggleExpand }
}
