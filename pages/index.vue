<template>
  <div
    class="hero-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-3xl mx-auto text-center">
      <h1
        class="text-5xl sm:text-5xl text-basic-darkGray dark:text-basic-mediumGray font-extrabold mb-6 dark:text-white"
      >
        Bonjour, Je suis
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
      <div class="flex flex-col justify-center items-center">
        <ButtonComponent
          :class-name="'w-4/5 px-6 py-3 text-lg mb-4 bg-btnGradient text-basic-white dark:text-basic-white justify-center'"
          :label="'Voir mon C.V.'"
        />
        <ButtonComponent
          :class-name="'w-4/5 px-6 py-3 text-lg mb-4 bg-light-faintWhite dark:bg-basic-onyx text-basic-onyx dark:text-basic-darkGray justify-center'"
          :label="'Contact'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vous pouvez ajouter ici la logique spécifique au composant si nécessaire
</script>
