<script setup lang="ts">
import type { Component } from 'vue'
import { Mail } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { email, socials } from '@/data/socials'
import type { Social } from '@/data/socials'

const icons: Record<Social['icon'], Component> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
}
</script>

<template>
  <section id="contact" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div v-reveal>
        <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Contact</h2>
        <Separator class="mt-4 mb-10" />
      </div>

      <div v-reveal="90" class="flex flex-col items-start gap-8">
        <p class="max-w-2xl text-muted-foreground">
          I'm open to full-time engineering roles internationally —
          relocation included.
        </p>

        <Button as-child size="lg">
          <a :href="`mailto:${email}`">
            <Mail class="size-4" />
            Get in touch
          </a>
        </Button>

        <div class="flex gap-2">
          <Button
            v-for="social in socials"
            :key="social.label"
            as-child
            variant="outline"
            size="icon"
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
