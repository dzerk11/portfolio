<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { asset } from '@/lib/utils'
</script>

<template>
  <section id="about" class="scroll-mt-14 py-24">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div v-reveal>
        <h2 class="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">About</h2>
        <Separator class="mt-4 mb-10" />
      </div>

      <div v-reveal="90" class="flex flex-col gap-10 md:flex-row md:items-start">
        <Avatar class="size-28 shrink-0 md:size-36">
          <AvatarImage :src="asset('images/avatar.jpg')" alt="Davide Zattra" />
          <AvatarFallback class="text-2xl">DZ</AvatarFallback>
        </Avatar>

        <div class="space-y-4 text-muted-foreground">
          <p>
            I came to software from industrial automation, and I like owning
            systems end to end, from the integration code to the infrastructure
            it runs on. I spend time on the shop floor learning how operators
            actually work, then turn what they need into software they trust.
          </p>
          <p>
            I joined AMER, an Italian electric-motor manufacturer, as an intern
            in 2019, when the plant's IoT ran on a single vendor-built server,
            with no version control, no containers and no pipelines. A couple of years
            later I took the initiative to modernize it, and I've been its
            technical lead ever since.
          </p>
          <p>
            I'm curious by nature and learn most things on the job. Lately I've
            been focusing on DevOps and AWS, working toward the Solutions
            Architect certification. Alongside my day job, I've also designed
            and coded Fortnite islands in UEFN.
          </p>
          <p>
            Now I'm looking for a faster, more ambitious environment, and I'm
            ready to relocate for the right full-time role.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
