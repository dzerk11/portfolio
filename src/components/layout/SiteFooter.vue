<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border/60">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6"
    >
      <p>© {{ year }} Davide Zattra. All rights reserved.</p>
      <p>Built with Vue 3, Tailwind CSS &amp; shadcn-vue.</p>
    </div>
  </footer>
</template>
