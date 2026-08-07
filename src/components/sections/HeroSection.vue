<script setup lang="ts">
import { ArrowDown, FileDown } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <section id="top" class="relative flex min-h-svh items-center overflow-hidden">
    <!-- Subtle background: radial glow + grid -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />
      <div
        class="absolute left-1/2 top-1/3 h-[32rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
    </div>

    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6">
      <Badge variant="secondary" class="mb-6">
        Automation · IoT · Industry 4.0
      </Badge>

      <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        Davide Zattra
      </h1>
      <p class="mt-4 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
        Fullstack developer bridging industrial machines and modern software.
      </p>
      <p class="mt-6 max-w-2xl text-muted-foreground">
        Placeholder intro: I design and build Industry 4.0 solutions from
        Vicenza, Italy — from PLC data acquisition to real-time dashboards —
        with a past life crafting game experiences in UEFN.
      </p>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <Button as-child size="lg">
          <a href="#projects">
            View projects
            <ArrowDown class="size-4" />
          </a>
        </Button>
        <Button as-child size="lg" variant="outline">
          <a href="/cv/Davide_Zattra_CV.pdf" download>
            <FileDown class="size-4" />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  </section>
</template>
