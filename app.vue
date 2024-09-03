<script setup lang="ts">
const { $device } = useNuxtApp();
const isMobile = ref($device.isMobile);
const isDark = ref(false);

const onThemeChange = (darkMode: boolean) => {
  isDark.value = darkMode;
};

onMounted(() => {
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth < 640;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {});
});
</script>

<template>
  <div class="min-h-screen w-full flex flex-col">
    <div
      :class="['min-h-screen', isDark ? 'bg-darkGradient' : 'bg-lightGradient']"
    >
      <div v-if="isMobile" class="mt-5 flex justify-center">
        <img
          alt="logo"
          src="~/assets/icons/GB.svg"
          class="h-[50px] dark:text-basic-lightGray text-basic-onyx"
        />
      </div>
      <LayoutNavBar
        :is-mobile="isMobile"
        @define-color-scheme="onThemeChange"
      />
      <NuxtPage />
      <LayoutFooter :is-mobile="isMobile" />
    </div>
  </div>
</template>
<style scoped>
.bg-darkGradient {
  background:
    radial-gradient(
        ellipse at top,
        rgba(13, 13, 13, 0) 0%,
        rgb(13, 13, 13, 0.5) 20%,
        rgb(13, 13, 13) 40%
      )
      no-repeat top center,
    radial-gradient(
        ellipse at bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(13, 13, 13, 0.5) 20%,
        rgb(13, 13, 13) 40%
      )
      no-repeat bottom center,
    linear-gradient(
        to right,
        rgb(13, 13, 13, 1) 0%,
        rgba(63, 100, 233, 0.3) 30%,
        rgba(151, 71, 255, 0.3) 40%,
        rgba(233, 63, 63, 0.3) 60%,
        rgba(255, 184, 0, 0.3) 70%,
        rgb(13, 13, 13, 1) 100%
      )
      no-repeat top center,
    linear-gradient(
        to right,
        rgba(13, 13, 13, 1) 0%,
        rgba(255, 184, 0, 0.3) 30%,
        rgba(233, 63, 63, 0.3) 40%,
        rgba(151, 71, 255, 0.3) 60%,
        rgba(63, 100, 233, 0.3) 70%,
        rgba(13, 13, 13, 1) 100%
      )
      no-repeat bottom center,
    #0d0d0d;
  background-size:
    100% 200px,
    100% 200px,
    100% 200px,
    100% 200px,
    100% 100%;
}

.bg-lightGradient {
  background:
    radial-gradient(
        ellipse at top,
        rgba(251, 251, 251, 0) 0%,
        rgba(251, 251, 251, 0.5) 20%,
        rgba(251, 251, 251, 1) 40%
      )
      no-repeat top center,
    radial-gradient(
        ellipse at bottom,
        rgba(251, 251, 251, 0) 0%,
        rgba(251, 251, 251, 0.5) 20%,
        rgba(251, 251, 251, 1) 40%
      )
      no-repeat bottom center,
    linear-gradient(
        to right,
        rgba(251, 251, 251, 1) 0%,
        rgba(63, 100, 233, 0.4) 35%,
        rgba(151, 71, 255, 0.4) 45%,
        rgba(233, 63, 63, 0.4) 55%,
        rgba(255, 184, 0, 0.4) 65%,
        rgba(251, 251, 251, 1) 100%
      )
      no-repeat top center,
    linear-gradient(
        to right,
        rgba(251, 251, 251, 1) 0%,
        rgba(255, 184, 0, 0.4) 35%,
        rgba(233, 63, 63, 0.4) 45%,
        rgba(151, 71, 255, 0.4) 55%,
        rgba(63, 100, 233, 0.4) 65%,
        rgba(251, 251, 251, 1) 100%
      )
      no-repeat bottom center,
    #fbfbfb;
  background-size:
    100% 200px,
    100% 200px,
    100% 200px,
    100% 200px,
    100% 100%;
}
</style>
