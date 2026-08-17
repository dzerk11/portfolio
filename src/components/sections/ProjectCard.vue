<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue'
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

const expanded = ref<string | null>(null)

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') expanded.value = null
}

watch(expanded, (open) => {
  if (open) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})

onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Card
    class="flex flex-col overflow-hidden bg-card/50 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-md"
  >
    <ShowreelEmbed
      v-if="project.showreelId"
      :video-id="project.showreelId"
      :title="`${project.title} — show reel`"
      class="rounded-none border-0"
    />
    <button
      v-else-if="project.image"
      type="button"
      class="cursor-zoom-in"
      :aria-label="`Expand ${project.title} image`"
      @click="expanded = project.image"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="aspect-video w-full object-cover"
        loading="lazy"
      />
    </button>

    <CardHeader>
      <CardTitle>{{ project.title }}</CardTitle>
      <CardDescription>{{ project.description }}</CardDescription>
    </CardHeader>

    <CardContent v-if="project.gallery?.length" class="grid grid-cols-2 gap-2">
      <button
        v-for="shot in project.gallery"
        :key="shot"
        type="button"
        class="cursor-zoom-in"
        :aria-label="`Expand ${project.title} screenshot`"
        @click="expanded = shot"
      >
        <img
          :src="shot"
          :alt="`${project.title} screenshot`"
          class="aspect-video w-full rounded-md border border-border object-cover"
          loading="lazy"
        />
      </button>
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

    <Teleport to="body">
      <div
        v-if="expanded"
        class="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        @click="expanded = null"
      >
        <img
          :src="expanded"
          :alt="`${project.title} — expanded screenshot`"
          class="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
      </div>
    </Teleport>
  </Card>
</template>
