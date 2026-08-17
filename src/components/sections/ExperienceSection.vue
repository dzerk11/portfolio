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
          v-for="(exp, i) in experiences"
          :key="exp.role + exp.period"
          class="relative pl-8"
          :class="i < experiences.length - 1 ? 'pb-12' : ''"
        >
          <!-- Marker: dot and line share the same absolute x-axis (6px = dot center) -->
          <span v-if="exp.current" class="absolute left-0 top-2 size-3">
            <span class="absolute inset-0 animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
            <span class="absolute inset-0 rounded-full bg-primary" />
          </span>
          <span v-else class="absolute left-0 top-2 size-3 rounded-full bg-zinc-600" />
          <span
            v-if="i < experiences.length - 1"
            class="absolute left-1.5 top-[26px] bottom-0 w-0.5 -translate-x-1/2 rounded-full"
            :class="exp.current ? 'bg-primary' : 'bg-border'"
          />

          <div class="min-w-0">
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
          </div>
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
