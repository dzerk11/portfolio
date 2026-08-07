<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <section id="about" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">About</h2>
      <Separator class="mt-4 mb-10" />

      <div class="flex flex-col gap-10 md:flex-row md:items-start">
        <Avatar class="size-28 shrink-0 md:size-36">
          <AvatarImage src="/images/avatar.jpg" alt="Davide Zattra" />
          <AvatarFallback class="text-2xl">DZ</AvatarFallback>
        </Avatar>

        <div class="space-y-4 text-muted-foreground">
          <p>
            Placeholder paragraph 1: I'm Davide, a 25-year-old developer from
            Vicenza, Italy, working at the intersection of industrial automation
            and modern web technology. My day-to-day involves connecting
            factory-floor machinery to cloud platforms and building the software
            that makes sense of the data.
          </p>
          <p>
            Placeholder paragraph 2: my toolkit spans the full stack — from Kepware
            and ThingWorx on the industrial side, through PostgreSQL and InfluxDB
            for data, to Vue.js and Node.js for the interfaces people actually use.
            Everything ships in Docker through GitLab CI/CD.
          </p>
          <p>
            Placeholder paragraph 3: before industry, I spent two years building
            game experiences in Unreal Editor for Fortnite — an experience that
            taught me rapid iteration, player-focused design, and shipping under
            deadlines.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
