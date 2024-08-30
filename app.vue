<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
  <div  class="bg-custom-gradient min-h-screen bg-white dark:bg-slate-800">
    <NavBarComponent />
    <NuxtPage />
    <ClientOnly>
      <UButton
          color="gray"
          variant="ghost"
          aria-label="Theme"
          :label="`Theme actif : ${isDark ? 'dark' : 'light'}`"
          @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>
<style scoped>
.bg-custom-gradient {
  background:
      radial-gradient(
          ellipse at top,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 60%
      ) no-repeat top center,
      radial-gradient(
          ellipse at bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 60%
      ) no-repeat bottom center,
      linear-gradient(
          to right,
          rgba(255, 255, 255, 1) 0%,
          rgba(63, 100, 233, 0.3) 35%,
          rgba(151, 71, 255, 0.3) 45%,
          rgba(233, 63, 63, 0.3) 55%,
          rgba(255, 184, 0, 0.3) 65%,
          rgba(255, 255, 255, 1) 100%
      ) no-repeat top center,
      linear-gradient(
          to right,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 184, 0, 0.3) 35%,
          rgba(233, 63, 63, 0.3) 45%,
          rgba(151, 71, 255, 0.3) 55%,
          rgba(63, 100, 233, 0.3) 65%,
          rgba(255, 255, 255, 1) 100%
      ) no-repeat bottom center,
      white;
  background-size: 100% 200px, 100% 200px, 100% 200px, 100% 200px, 100% 100%;
}
</style>