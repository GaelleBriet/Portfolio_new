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
watch(colorMode, (newValue) => {
  console.log('colorMode changed to:', newValue)
})
</script>
<template>
  <div :class="['min-h-screen',
     isDark ? 'bg-darkGradient' : 'bg-lightGradient']"
  >
    <NavBarComponent />
    <NuxtPage />
    <ClientOnly>
      <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
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
.bg-darkGradient {
  background:
      radial-gradient(
          ellipse at top,
          rgba(0, 0, 0, 0) 0%,
          rgba(10, 10, 10, 0.5) 25%,
          rgb(19, 19, 19) 50%
      ) no-repeat top center,
      radial-gradient(
          ellipse at bottom,
          rgba(0, 0, 0, 0) 0%,
          rgba(10, 10, 10, 0.5) 25%,
          rgb(19, 19, 19) 50%
      ) no-repeat bottom center,
      linear-gradient(
          to right,
          rgb(49, 49, 49, 1) 0%,
          rgba(63, 100, 233, 0.3) 20%,
          rgba(151, 71, 255, 0.3) 30%,
          rgba(233, 63, 63, 0.3) 60%,
          rgba(255, 184, 0, 0.3) 80%,
          rgb(49, 49, 49, 1) 100%
      ) no-repeat top center,
      linear-gradient(
          to right,
          rgba(49, 49, 49, 1) 0%,
          rgba(255, 184, 0, 0.3) 20%,
          rgba(233, 63, 63, 0.3) 40%,
          rgba(151, 71, 255, 0.3) 70%,
          rgba(63, 100, 233, 0.3) 80%,
          rgba(49, 49, 49, 1) 100%
      ) no-repeat bottom center,
      #131313;
  background-size: 100% 200px, 100% 200px, 100% 200px, 100% 200px, 100% 100%;
}


.bg-lightGradient {
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




