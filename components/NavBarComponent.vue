<script setup lang="ts">
import { getCapitalizedText } from "~/services/helpers/TextFormatter";

// const { $device } = useNuxtApp();
// const isMobile = ref($device.isMobile);
defineProps<{ isMobile: boolean }>();

const colorMode = useColorMode();

const isDark = ref(false);

const emit = defineEmits<{
  (event: "defineColorScheme", isDark: boolean): void;
}>();

const onThemeChange = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  isDark.value = colorMode.value === "dark";
  emit("defineColorScheme", isDark.value);
};

const activeItem = useState("activeNavItem", () => "home");

const navItems = ref([
  {
    name: "home",
    iconOutline: "heroicons-outline:home",
    iconSolid: "heroicons-solid:home",
    link: "/",
  },
  {
    name: "about",
    iconOutline: "heroicons-outline:user",
    iconSolid: "heroicons-solid:user",
    link: "/",
  },
  {
    name: "work",
    iconOutline: "heroicons-outline:shopping-bag",
    iconSolid: "heroicons-solid:shopping-bag",
    link: "/",
  },
  {
    name: "notebook",
    iconOutline: "heroicons-outline:pencil",
    iconSolid: "heroicons-solid:pencil",
    link: "/",
  },
  {
    name: "contact",
    iconOutline: "heroicons-outline:mail",
    iconSolid: "heroicons-solid:mail",
    link: "/",
  },
  {
    name: "more",
    iconOutline: "heroicons-outline:queue-list",
    iconSolid: "heroicons-solid:queue-list",
    link: "/",
  },
]);

const navMainItems = ref([
  {
    name: "about",
    icon: "mdi:linkedin",
    link: "/",
  },
  {
    name: "work",
    link: "/",
  },
  {
    name: "notebook",
    link: "/",
  },
  {
    name: "contact",
    link: "/",
  },
  {
    name: "more",
    link: "/",
  },
]);

const socialItems = ref([
  {
    name: "linkedin",
    icon: "mdi:linkedin",
    link: "/",
  },
  {
    name: "twitter",
    icon: "hugeicons:new-twitter",
    link: "/",
  },
  {
    name: "github",
    icon: "mdi:github",
    link: "/",
  },
]);

const setActiveItem = (itemName: string) => {
  activeItem.value = itemName;
};

// onMounted(() => {
//   window.addEventListener("resize", () => {
//     isMobile.value = window.innerWidth < 640;
//   });
// });
//
// onUnmounted(() => {
//   window.removeEventListener("resize", () => {});
// });
</script>

<template>
  <!--  Navigation Mobile-->
  <div
    v-if="isMobile"
    class="fixed bottom-0 left-0 right-0 sm:hidden flex justify-center my-5"
  >
    <div
      class="flex flex-row items-center justify-center nav-mini-light dark:nav-mini-dark p-2"
    >
      <template v-for="navItem in navItems" :key="navItem.name">
        <NuxtLink
          :to="navItem.link"
          @click="setActiveItem(navItem.name)"
          :class="[
            'relative p-3 h-10 flex items-center justify-center rounded-xl transition-all duration-300',
            activeItem === navItem.name
              ? 'bg-dark-black_50 dark:bg-dark-white_10'
              : 'hover:bg-light-black_10 dark:hover:bg-basic-onyx',
          ]"
        >
          <div class="relative w-6 h-6">
            <Icon
              :name="navItem.iconOutline"
              class="absolute inset-0 w-full h-full transition-all duration-300 text-basic-white dark:text-basic-white"
              :class="activeItem === navItem.name ? 'opacity-0' : 'opacity-100'"
            />
            <Icon
              :name="navItem.iconSolid"
              class="absolute inset-0 w-full h-full transition-all duration-300 text-light-faintWhite dark:text-basic-lightGray"
              :class="activeItem === navItem.name ? 'opacity-100' : 'opacity-0'"
            />
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>

  <!--  Navigation Desktop-->
  <div v-else class="flex justify-center my-5 w-3/4 mx-auto h-[60px]">
    <div
      class="flex flex-row items-center justify-between nav-light dark:nav-dark w-full p-2"
    >
      <div class="flex justify-center items-center">
        <img
          alt="logo"
          src="../assets/icons/GB.svg"
          class="h-[50px] sm:h-[40px] sm:me-2 dark:text-basic-lightGray"
        />
      </div>
      <div
        class="flex flex-row w-4/6 justify-start md:gap-5 md:text-base sm:text-sm sm:gap-2"
      >
        <template v-for="navMainItem in navMainItems" :key="navMainItem.name">
          <NuxtLink
            :to="navMainItem.link"
            class="relative overflow-hidden group transition-all duration-300 ease-in-out"
          >
            <div class="hover-effect dark:text-basic-lightGray">
              {{ getCapitalizedText(navMainItem.name) }}
            </div>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>
        </template>
      </div>
      <div class="flex flex-row items-center">
        <div
          v-for="social in socialItems"
          :key="social.name"
          class="flex items-center"
        >
          <NuxtLink :to="social.link">
            <Icon
              :name="social.icon"
              :class="social.icon"
              class="w-10 h-[24px] flex items-center dark:text-basic-lightGray text-basic-onyx justify-center transition-all duration-150 transform hover:rotate-180"
            />
          </NuxtLink>
        </div>
        <UButton
          :icon="
            isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
          "
          class="border-s-2 border-basic-lightGray rounded-none items-center flex dark:text-basic-lightGray text-basic-onyx"
          variant="ghost"
          aria-label="Theme"
          @click="onThemeChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
