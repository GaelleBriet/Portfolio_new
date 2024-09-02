<script setup lang="ts">
const props = defineProps<{
  isMobile?: boolean;
  className?: string;
  label?: string;
}>();
</script>

<template>
  <UButton :class="className">{{ label }}</UButton>
</template>

<style scoped></style>
