<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { education, experiences } from '@/data/experience'
</script>

<template>
  <section id="experience" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Experience</h2>
      <Separator class="mt-4 mb-10" />

      <ol class="relative space-y-12 border-l border-border pl-8">
        <li v-for="exp in experiences" :key="exp.role" class="relative">
          <!-- Timeline dot -->
          <span
            class="absolute -left-[2.35rem] top-1.5 size-3 rounded-full border-2 border-background"
            :class="exp.current ? 'bg-primary' : 'bg-muted-foreground'"
          />

          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 class="text-lg font-medium text-foreground">{{ exp.role }}</h3>
            <Badge v-if="exp.current" variant="default">Current</Badge>
          </div>
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
