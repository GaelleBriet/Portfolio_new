<script setup lang="ts">
import { getCapitalizedText } from "~/services/helpers/TextFormatter";

defineProps<{ isMobile: boolean }>();

const socialLinks = [
  { name: "email", url: "" },
  { name: "linkedin", url: "" },
  { name: "gitHub", url: "" },
  { name: "twitter", url: "" },
  { name: "discord", url: "" },
];

const siteLinks = [
  { name: "about", link: "" },
  { name: "projects", link: "" },
  { name: "tech stack", link: "" },
  { name: "contact", link: "" },
];

const currentYear = new Date().getFullYear();
</script>
<template>
  <div
    :class="[
      'fixed bottom-0 left-0 right-0',
      isMobile
        ? 'sm:hidden flex flex-col justify-center pb-[60px] my-8 mx-8'
        : 'flex my-10 w-3/4 mx-auto justify-between',
    ]"
  >
    <div :class="[isMobile ? 'mb-10' : 'flex flex-col justify-between']">
      <div>
        <img
          alt="logo"
          src="../assets/icons/GB.svg"
          :class="[
            isMobile ? 'h-[50px] ' : 'h-[60px]',
            'dark:text-basic-lightGray text-basic-onyx',
          ]"
        />
      </div>
      <div v-if="!isMobile">
        <p class="text-sm dark:text-dark-white_25 text-dark-black_50">
          © {{ currentYear }}
          <span>
            Made with <span class="text-red-500">❤️</span> by Gaëlle Briet
          </span>
        </p>
      </div>
    </div>

    <div :class="[isMobile ? '' : 'flex flex-row flex-grow justify-end']">
      <div :class="{ 'mb-10': isMobile, 'me-10': !isMobile }">
        <p class="mb-8 dark:text-basic-white text-base font-bold">Navigation</p>
        <div
          v-for="site in siteLinks"
          :key="site.name"
          class="mb-4 dark:text-basic-lightGray text-basic-onyx"
        >
          <NuxtLink
            :to="site.link"
            class="dark:text-basic-lightGray text-basic-onyx"
          >
            {{ getCapitalizedText(site.name) }}
          </NuxtLink>
        </div>
      </div>
      <div :class="{ 'mb-10': isMobile, 'mx-5': !isMobile }">
        <p class="mb-8 dark:text-basic-white text-base font-bold">
          Me retrouver
        </p>
        <div
          v-for="social in socialLinks"
          :key="social.name"
          class="mb-4 dark:text-basic-lightGray text-basic-onyx"
        >
          <NuxtLink
            :to="social.url"
            class="dark:text-basic-lightGray text-basic-onyx"
          >
            {{ getCapitalizedText(social.name) }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="isMobile">
      <p class="text-sm dark:text-dark-white_25 text-dark-black_50">
        © {{ currentYear }}
        <span>
          Made with <span class="text-red-500">❤️</span> by Gaëlle Briet
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
