<script setup lang="ts">
import { ArrowDown } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { education, experiences } from '@/data/experience'
</script>

<template>
  <section id="experience" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Experience</h2>
      <Separator class="mt-4 mb-10" />

      <ol>
        <li
          v-for="exp in experiences"
          :key="exp.role + exp.period"
          class="relative border-l-2 pl-8 pb-12 last:pb-0"
          :class="exp.current ? 'border-primary' : 'border-border'"
        >
          <!-- Timeline dot, centered on the rail color transition -->
          <span v-if="exp.current" class="absolute -left-[7px] -top-1.5 flex size-3">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span class="relative inline-flex size-3 rounded-full border-2 border-background bg-primary" />
          </span>
          <span
            v-else
            class="absolute -left-[7px] -top-1.5 size-3 rounded-full border-2 border-background bg-zinc-600"
          />

          <h3 class="text-lg font-medium text-foreground">{{ exp.role }}</h3>
          <p class="mt-1 text-sm text-muted-foreground">
            {{ exp.company }} · {{ exp.location }} · {{ exp.period }}
          </p>

          <p class="mt-4 text-muted-foreground">{{ exp.summary }}</p>

          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
            <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
          </ul>

          <div class="mt-4 flex flex-wrap gap-2">
            <Badge v-for="tag in exp.tags" :key="tag" variant="outline">{{ tag }}</Badge>
          </div>

          <a
            v-if="exp.relatedAnchor"
            :href="exp.relatedAnchor"
            class="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Related projects
            <ArrowDown class="size-3.5" />
          </a>
        </li>
      </ol>

      <h3 class="mt-16 text-lg font-medium text-foreground">Education &amp; Certifications</h3>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <div
          v-for="edu in education"
          :key="edu.title"
          class="rounded-lg border border-border bg-card/50 p-5"
        >
          <p class="font-medium text-foreground">{{ edu.title }}</p>
          <p class="mt-1 text-sm text-muted-foreground">
            {{ edu.school }} · {{ edu.period }}<template v-if="edu.note"> · {{ edu.note }}</template>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
