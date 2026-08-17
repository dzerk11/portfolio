<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section id="skills" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div v-reveal>
        <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Skills</h2>
        <Separator class="mt-4 mb-10" />
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="(group, i) in skillGroups"
          :key="group.label"
          v-reveal="i * 70"
          class="bg-card/50 transition-colors duration-300 hover:border-primary/40"
        >
          <CardHeader>
            <CardTitle class="text-base">{{ group.label }}</CardTitle>
          </CardHeader>
          <CardContent class="flex flex-wrap gap-2">
            <Badge v-for="skill in group.skills" :key="skill" variant="secondary">
              {{ skill }}
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
