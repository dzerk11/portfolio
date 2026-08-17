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
            I'm a developer who likes understanding how things actually work,
            from the ground up. My path started in industrial automation, and
            that hands-on foundation still shapes how I work today: I care about
            the full picture, not just one layer of a system.
          </p>
          <p>
            I'm largely self-taught beyond my technical diploma, and I enjoy
            picking up new tools and languages when a problem calls for them.
            That curiosity has taken me from PLCs to full-stack development.
            Alongside my main role, I've also designed and shipped game
            experiences for Fortnite (UEFN).
          </p>
          <p>
            I'm always looking to grow and take on new challenges — and I'm
            currently seeking full-time opportunities abroad, open to
            relocation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
