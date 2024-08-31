<script setup lang="ts">
const isDark = ref(false);

const onThemeChange = (darkMode: boolean) => {
  isDark.value = darkMode;
};
</script>

<template>
  <div class="">
    <div
      :class="['min-h-screen', isDark ? 'bg-darkGradient' : 'bg-lightGradient']"
    >
      <NavBarComponent @define-color-scheme="onThemeChange" />
      <NuxtPage />
      <FooterComponent />
    </div>
  </div>
</template>
<style scoped>
.bg-darkGradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(
        ellipse at top,
        rgba(26, 26, 26, 0) 0%,
        rgb(26, 26, 26, 0.5) 20%,
        rgb(26, 26, 26) 40%
      )
      no-repeat top center,
    radial-gradient(
        ellipse at bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(26, 26, 26, 0.5) 20%,
        rgb(26, 26, 26) 40%
      )
      no-repeat bottom center,
    linear-gradient(
        to right,
        rgb(49, 49, 49, 1) 0%,
        rgba(63, 100, 233, 0.3) 30%,
        rgba(151, 71, 255, 0.3) 40%,
        rgba(233, 63, 63, 0.3) 60%,
        rgba(255, 184, 0, 0.3) 70%,
        rgb(49, 49, 49, 1) 100%
      )
      no-repeat top center,
    linear-gradient(
        to right,
        rgba(49, 49, 49, 1) 0%,
        rgba(255, 184, 0, 0.3) 30%,
        rgba(233, 63, 63, 0.3) 40%,
        rgba(151, 71, 255, 0.3) 60%,
        rgba(63, 100, 233, 0.3) 70%,
        rgba(49, 49, 49, 1) 100%
      )
      no-repeat bottom center,
    #1a1a1a;
  background-size:
    100% 200px,
    100% 200px,
    100% 200px,
    100% 200px,
    100% 100%;
}

.bg-lightGradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.bg-darkGradient { position: absolute; top: 0; left: 0; width: 100%; height:
100%; background: radial-gradient( 15% 20% at 35% 5%, rgba(63, 100, 233, 0.2)
0%, rgba(63, 100, 233, 0.1) 20%, rgba(26, 26, 26, 0) 65% ), radial-gradient( 30%
20% at 50% 5%, rgba(233, 63, 63, 0.2) 0%, rgba(233, 63, 63, 0.1) 50%, rgba(26,
26, 26, 0) 80% ), radial-gradient( 15% 20% at 65% 5%, rgba(255, 184, 0, 0.2) 0%,
rgba(255, 184, 0, 0.1) 20%, rgba(26, 26, 26, 0) 65% ), radial-gradient( 30% 20%
at 42.5% 5%, rgba(151, 71, 255, 0.2) 0%, rgba(151, 71, 255, 0.1) 10%, rgba(26,
26, 26, 0) 80% ), radial-gradient( 30% 20% at 57.5% 5%, rgba(178, 103, 41, 0.2)
0%, rgba(178, 103, 41, 0.1) 10%, rgba(26, 26, 26, 0) 80% ), radial-gradient( 15%
20% at 65% 95%, rgba(63, 100, 233, 0.2) 0%, rgba(63, 100, 233, 0.1) 20%,
rgba(26, 26, 26, 0) 65% ), radial-gradient( 30% 20% at 50% 95%, rgba(233, 63,
63, 0.2) 0%, rgba(233, 63, 63, 0.1) 50%, rgba(26, 26, 26, 0) 80% ),
radial-gradient( 15% 20% at 35% 95%, rgba(255, 184, 0, 0.2) 0%, rgba(255, 184,
0, 0.1) 20%, rgba(26, 26, 26, 0) 65% ), radial-gradient( 30% 20% at 57.5% 95%,
rgba(151, 71, 255, 0.2) 0%, rgba(151, 71, 255, 0.1) 10%, rgba(26, 26, 26, 0) 80%
), radial-gradient( 30% 20% at 42.5% 95%, rgba(178, 103, 41, 0.2) 0%, rgba(178,
103, 41, 0.1) 10%, rgba(26, 26, 26, 0) 80% ), linear-gradient( to bottom,
rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 1) 20% ), #1A1A1A; }
.bg-lightGradient { position: absolute; top: 0; left: 0; width: 100%; height:
100%; background: radial-gradient( 15% 20% at 35% 5%, rgba(63, 100, 233, 0.2)
0%, rgba(63, 100, 233, 0.1) 20%, rgba(255, 255, 255, 0) 65% ), radial-gradient(
30% 20% at 50% 5%, rgba(233, 63, 63, 0.2) 0%, rgba(233, 63, 63, 0.1) 40%,
rgba(255, 255, 255, 0) 80% ), radial-gradient( 15% 20% at 65% 5%, rgba(255, 184,
0, 0.2) 0%, rgba(255, 184, 0, 0.1) 20%, rgba(255, 255, 255, 0) 65% ),
radial-gradient( 30% 20% at 42.5% 5%, rgba(151, 71, 255, 0.2) 0%, rgba(151, 71,
255, 0.1) 10%, rgba(255, 255, 255, 0) 80% ), radial-gradient( 30% 20% at 57.5%
5%, rgb(178, 103, 41, 0.2) 0%, rgb(178, 103, 41, 0.1) 10%, rgba(255, 255, 255,
0) 80% ), radial-gradient( 15% 20% at 65% 95%, rgba(63, 100, 233, 0.2) 0%,
rgba(63, 100, 233, 0.1) 20%, rgba(255, 255, 255, 0) 65% ), radial-gradient( 30%
20% at 50% 95%, rgba(233, 63, 63, 0.2) 0%, rgba(233, 63, 63, 0.1) 40%, rgba(255,
255, 255, 0) 80% ), radial-gradient( 15% 20% at 35% 95%, rgba(255, 184, 0, 0.2)
0%, rgba(255, 184, 0, 0.1) 20%, rgba(255, 255, 255, 0) 65% ), radial-gradient(
30% 20% at 57.5% 95%, rgba(151, 71, 255, 0.2) 0%, rgba(151, 71, 255, 0.1) 10%,
rgba(255, 255, 255, 0) 80% ), radial-gradient( 30% 20% at 42.5% 95%, rgb(178,
103, 41, 0.2) 0%, rgb(178, 103, 41, 0.1) 10%, rgba(255, 255, 255, 0) 80% ),
linear-gradient( to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1)
20% ), #fbfbfb; }
