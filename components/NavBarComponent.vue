<script setup lang="ts">
const activeItem = useState("activeNavItem", () => "home");

const navItems = ref([
  {
    name: "home",
    iconOutline: "heroicons-outline:home",
    iconSolid: "heroicons-solid:home",
    link: "/",
  },
  {
    name: "user",
    iconOutline: "heroicons-outline:user",
    iconSolid: "heroicons-solid:user",
    link: "/",
  },
  {
    name: "bag",
    iconOutline: "heroicons-outline:shopping-bag",
    iconSolid: "heroicons-solid:shopping-bag",
    link: "/",
  },
  {
    name: "pencil",
    iconOutline: "heroicons-outline:pencil",
    iconSolid: "heroicons-solid:pencil",
    link: "/",
  },
  {
    name: "mail",
    iconOutline: "heroicons-outline:mail",
    iconSolid: "heroicons-solid:mail",
    link: "/",
  },
  {
    name: "list",
    iconOutline: "heroicons-outline:queue-list",
    iconSolid: "heroicons-solid:queue-list",
    link: "/",
  },
]);

const setActiveItem = (itemName: string) => {
  activeItem.value = itemName;
};
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 sm:hidden flex justify-center my-5">
    <div
      class="flex flex-row items-center justify-center nav-light dark:nav-dark p-2"
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
</template>

<style scoped></style>
