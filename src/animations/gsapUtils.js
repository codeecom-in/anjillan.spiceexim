import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initializes a smooth hero entrance animation within a React ref scope
 * @param {HTMLElement} scopeElement 
 */
export function initHeroEntrance(scopeElement) {
  if (!scopeElement) return null

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      '.hero-badge',
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo(
      '.hero-title-line',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      '-=0.3'
    )
    .fromTo(
      '.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-action-buttons > *',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      '-=0.3'
    )
    .fromTo(
      '.hero-visual-card',
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.9 },
      '-=0.6'
    )
    .fromTo(
      '.hero-stat-badge',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      '-=0.5'
    )

    // Gentle ambient floating animation on showcase card highlights
    gsap.to('.hero-float-accent', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })
  }, scopeElement)

  return ctx
}

/**
 * Reusable scroll reveal trigger scoped to a container
 * @param {HTMLElement} scopeElement
 * @param {string} targetSelector
 * @param {object} customOptions
 */
export function initScrollReveal(scopeElement, targetSelector, customOptions = {}) {
  if (!scopeElement) return null

  const ctx = gsap.context(() => {
    gsap.fromTo(
      targetSelector,
      { opacity: 0, y: 35, ...customOptions.from },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: targetSelector,
          start: 'top 85%',
          toggleActions: 'play none none none',
          ...customOptions.scrollTrigger
        },
        ...customOptions.to
      }
    )
  }, scopeElement)

  return ctx
}

/**
 * Animated trade route path draw
 * @param {HTMLElement} scopeElement
 */
export function initRouteAnimation(scopeElement) {
  if (!scopeElement) return null

  const ctx = gsap.context(() => {
    const path = scopeElement.querySelector('.trade-route-path')
    if (path) {
      const length = path.getTotalLength ? path.getTotalLength() : 450
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: scopeElement,
            start: 'top 75%'
          }
        }
      )
    }

    gsap.fromTo(
      '.route-port-pin',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.4,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: scopeElement,
          start: 'top 75%'
        }
      }
    )
  }, scopeElement)

  return ctx
}

export default gsap
