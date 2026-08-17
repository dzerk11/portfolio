import type { Directive } from 'vue'

/**
 * v-reveal — fades an element in the first time it scrolls into view.
 * Optional binding value is a stagger delay in ms: `v-reveal="i * 80"`.
 *
 * The hidden state is applied from JS so the content stays visible when
 * scripting or IntersectionObserver is unavailable.
 */

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return

    el.classList.add('reveal')
    // Cap stagger so long lists never feel sluggish
    const delay = Math.min(binding.value ?? 0, 150)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.unobserve(el)
          window.setTimeout(() => el.classList.add('reveal-in'), delay)
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(el)
    observers.set(el, observer)
  },

  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
