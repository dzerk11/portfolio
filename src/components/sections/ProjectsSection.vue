<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

const showreelProject = projects.find((p) => p.showreelId)
const otherProjects = projects.filter((p) => !p.showreelId)
</script>

<template>
  <section id="projects" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div v-reveal>
        <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Projects</h2>
        <Separator class="mt-4 mb-10" />
      </div>

      <!-- Featured show reel spans full width -->
      <ProjectCard v-if="showreelProject" v-reveal :project="showreelProject" class="mb-6" />

      <div class="grid gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="(project, i) in otherProjects"
          :key="project.title"
          v-reveal="i * 90"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
