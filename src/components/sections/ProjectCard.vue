<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Project } from '@/data/projects'
import ShowreelEmbed from './ShowreelEmbed.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <Card class="flex flex-col overflow-hidden bg-card/50">
    <ShowreelEmbed
      v-if="project.showreelId"
      :video-id="project.showreelId"
      :title="`${project.title} — show reel`"
      class="rounded-none border-0"
    />
    <img
      v-else-if="project.image"
      :src="project.image"
      :alt="project.title"
      class="aspect-video w-full object-cover"
      loading="lazy"
    />

    <CardHeader>
      <CardTitle>{{ project.title }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>

    <CardContent v-if="project.gallery?.length" class="grid grid-cols-2 gap-2">
      <img
        v-for="shot in project.gallery"
        :key="shot"
        :src="shot"
        :alt="`${project.title} screenshot`"
        class="aspect-video w-full rounded-md border border-border object-cover"
        loading="lazy"
      />
    </CardContent>

    <CardContent class="mt-auto flex flex-wrap gap-2">
      <Badge v-for="tag in project.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
    </CardContent>

    <CardFooter v-if="project.link">
      <Button as-child variant="ghost" size="sm">
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          View project
          <ExternalLink class="size-4" />
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>
