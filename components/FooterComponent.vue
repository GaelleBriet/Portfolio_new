<script setup lang="ts">
import { getCapitalizedText } from "~/services/helpers/TextFormatter";

defineProps<{ isMobile: boolean }>();

const socialLinks = [
  {
    name: "email",
    url: "",
  },
  {
    name: "linkedin",
    url: "",
  },
  {
    name: "gitHub",
    url: "",
  },
  {
    name: "twitter",
    url: "",
  },
  {
    name: "discord",
    url: "",
  },
];

const siteLinks = [
  {
    name: "about",
    link: "",
  },
  {
    name: "projects",
    link: "",
  },
  {
    name: "tech stack",
    link: "",
  },
  {
    name: "contact",
    link: "",
  },
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <div
    v-if="isMobile"
    class="fixed bottom-0 left-0 right-0 sm:hidden flex flex-col justify-center pb-[60px] my-8 mx-8"
  >
    <div class="mb-10">
      <p class="mb-8 dark:text-basic-white text-base font-bold">Me retrouver</p>
      <div
        v-for="social in socialLinks"
        class="mb-4 dark:text-basic-lightGray text-basic-onyx"
      >
        <NuxtLink
          :to="social.url"
          class="dark:text-basic-lightGray text-basic-onyx"
          >{{ getCapitalizedText(social.name) }}</NuxtLink
        >
      </div>
    </div>

    <div class="mb-10">
      <p class="mb-8 dark:text-basic-white text-base font-bold">Navigation</p>
      <div
        v-for="site in siteLinks"
        class="mb-4 dark:text-basic-lightGray text-basic-onyx"
      >
        <NuxtLink
          :to="site.link"
          class="dark:text-basic-lightGray text-basic-onyx"
          >{{ getCapitalizedText(site.name) }}</NuxtLink
        >
      </div>
    </div>
    <div>
      <img
        alt="logo"
        src="../assets/icons/GB.svg"
        class="h-[50px] sm:h-[40px] sm:me-2 dark:text-basic-lightGray text-basic-onyx"
      />
    </div>
    <div>
      <p class="text-sm dark:text-dark-white_25 text-dark-black_50">
        © {{ currentYear
        }}<span>
          Made with <span class="text-red-500">❤️</span> by Gaëlle Briet</span
        >
      </p>
    </div>
  </div>
  <div
    v-else
    class="fixed bottom-0 left-0 right-0 sm:hidden flex flex-col justify-center pb-[60px] my-8 mx-8"
  >
    <div class="mb-10">
      <p class="mb-8 dark:text-basic-white text-base font-bold">Me retrouver</p>
      <div
        v-for="social in socialLinks"
        class="mb-4 dark:text-basic-lightGray text-basic-onyx"
      >
        <NuxtLink
          :to="social.url"
          class="dark:text-basic-lightGray text-basic-onyx"
          >{{ getCapitalizedText(social.name) }}</NuxtLink
        >
      </div>
    </div>

    <div class="mb-10">
      <p class="mb-8 dark:text-basic-white text-base font-bold">Navigation</p>
      <div
        v-for="site in siteLinks"
        class="mb-4 dark:text-basic-lightGray text-basic-onyx"
      >
        <NuxtLink
          :to="site.link"
          class="dark:text-basic-lightGray text-basic-onyx"
          >{{ getCapitalizedText(site.name) }}</NuxtLink
        >
      </div>
    </div>
    <div>
      <img
        alt="logo"
        src="../assets/icons/GB.svg"
        class="h-[50px] sm:h-[40px] sm:me-2 dark:text-basic-lightGray text-basic-onyx"
      />
    </div>
    <div>
      <p class="text-sm dark:text-dark-white_25 text-dark-black_50">
        © {{ currentYear
        }}<span>
          Made with <span class="text-red-500">❤️</span> by Gaëlle Briet</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
