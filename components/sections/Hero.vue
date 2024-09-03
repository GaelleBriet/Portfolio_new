<script setup lang="ts">
import darkModeImage from "assets/images/Mode=Dark.png";
import lightModeImage from "assets/images/Mode=Light.png";

const colorMode = useColorMode();

const imageSrc = computed(() => {
  return colorMode.value === "dark" ? darkModeImage : lightModeImage;
});
</script>

<template>
  <div
    class="hero-section min-h-screen flex items-center sm:justify-starts justify-center w-3/4 mx-auto"
  >
    <div class="max-w-3xl sm:w-3/4 mx-auto text-center sm:text-left">
      <h1
        class="text-5xl text-basic-darkGray dark:text-basic-mediumGray font-extrabold mb-6 dark:text-white"
      >
        Bonjour, Je suis <br />
        <span class="text-basic-onyx dark:text-basic-white">Gaëlle Briet</span>
      </h1>
      <p class="text-xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        <span class="text-basic-onyx dark:text-basic-white"
          >Développeuse web,</span
        >
        <br />
        passionnée par le code, je crée des applications web modernes et
        intuitives qui font la différence pour les entreprises et leurs
        utilisateurs. <br />
        Explorez mes réalisations.
      </p>
      <div
        class="flex flex-col md:flex-row justify-center items-center sm:items-start sm:justify-start"
      >
        <UiButton
          :class-name="'w-4/5 px-6 py-3 text-lg mb-4 sm:mr-4 md:w-2/5 bg-btnGradient text-basic-white dark:text-basic-white justify-center'"
          :label="'Voir mon C.V.'"
        />
        <UiButton
          :class-name="
            'w-4/5 px-6 py-3 text-lg mb-4 sm:mr-4 md:w-2/5 bg-light-faintWhite dark:bg-basic-onyx ' +
            'text-basic-onyx dark:text-basic-darkGray justify-center hover:bg-basic-mediumGray dark:hover:bg-basic-mediumGray'
          "
          :label="'Contact'"
        />
      </div>
    </div>
    <div class="sm:w-1/3 min-h-[300px] flex items-center justify-center">
      <img
        alt="profile"
        :src="imageSrc"
        class="hidden sm:block w-full h-auto max-w-[300px] object-contain"
      />
    </div>
  </div>
</template>

<style scoped></style>
