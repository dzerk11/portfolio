<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Component } from 'vue'
import { ArrowDown, Mail } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { socials } from '@/data/socials'
import type { Social } from '@/data/socials'

const icons: Record<Social['icon'], Component> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
}

// Parallax: background layers drift slower than the scroll, content slightly
// faster fade. Runs only while the hero is on screen, via rAF.
const gridEl = ref<HTMLElement>()
const glowEl = ref<HTMLElement>()
const contentEl = ref<HTMLElement>()

let raf = 0
let reduced = false

function update() {
  raf = 0
  const y = window.scrollY
  if (y > window.innerHeight) return
  if (gridEl.value) gridEl.value.style.transform = `translateY(${y * 0.15}px)`
  if (glowEl.value) glowEl.value.style.transform = `translateY(${y * 0.3}px)`
  if (contentEl.value) {
    contentEl.value.style.transform = `translateY(${y * 0.08}px)`
    contentEl.value.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)))
  }
}

function onScroll() {
  if (!raf) raf = requestAnimationFrame(update)
}

onMounted(() => {
  reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return
  window.addEventListener('scroll', onScroll, { passive: true })
  // Paint the correct state immediately: scroll restoration or a direct
  // #anchor load can mount this component with scrollY already non-zero.
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="top" class="relative flex min-h-svh items-center overflow-hidden">
    <!-- Subtle background: radial glow + grid -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <!-- Faint dot field, densest behind the text block -->
      <div
        ref="gridEl"
        class="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30 [mask-image:radial-gradient(ellipse_55%_50%_at_32%_45%,black,transparent)]"
      />
      <!-- Giant cropped ring sweeping in from the top-right -->
      <div
        ref="glowEl"
        class="absolute -right-[26rem] -top-[30rem] size-[72rem] rounded-full border-2 border-primary/30 [mask-image:linear-gradient(to_top_right,black_25%,transparent_70%)]"
      />
      <div
        class="absolute -right-[20rem] -top-[24rem] size-[58rem] rounded-full border border-primary/15 [mask-image:linear-gradient(to_top_right,black_20%,transparent_65%)]"
      />
      <div
        class="absolute -right-[31rem] -top-[35rem] size-[84rem] rounded-full border border-border [mask-image:linear-gradient(to_top_right,black_15%,transparent_60%)]"
      />
      <div class="grain absolute inset-0 opacity-[0.05]" />
    </div>

    <div ref="contentEl" class="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <Badge variant="secondary">
          Automation · Industrial IoT · Full-Stack
        </Badge>
        <span class="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
            <span class="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Open to international opportunities
        </span>
      </div>

      <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        Davide Zattra
      </h1>
      <p class="mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
        Industrial IoT Platform Engineer &amp; Full-Stack Developer
      </p>
      <p class="mt-6 max-w-2xl text-muted-foreground">
        I design and build industrial IoT solutions — from PLC data acquisition
        to real-time dashboards — with a game-development background shipping
        UEFN experiences for Fortnite.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <Button as-child size="lg">
          <a href="#projects">
            View projects
            <ArrowDown class="size-4" />
          </a>
        </Button>

        <div class="flex items-center gap-1">
          <Button
            v-for="social in socials"
            :key="social.label"
            as-child
            variant="ghost"
            size="icon"
            class="text-muted-foreground hover:text-foreground"
          >
            <a
              :href="social.href"
              :aria-label="social.label"
              :target="social.href.startsWith('mailto:') ? undefined : '_blank'"
              rel="noopener noreferrer"
            >
              <component :is="icons[social.icon]" class="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
