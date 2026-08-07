<script setup lang="ts">
defineProps<{
  /** YouTube video ID */
  videoId: string
  title?: string
}>()
</script>

<template>
  <div class="aspect-video w-full overflow-hidden rounded-lg border border-border">
    <iframe
      class="size-full"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
      :title="title ?? 'Show reel'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    />
  </div>
</template>
