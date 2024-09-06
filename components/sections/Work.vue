<script setup lang="ts"></script>

<template>
  <div class="work-section min-h-screen w-3/4 mx-auto">
    <div>
      <p
        class="text-4xl font-bold text-basic-onyx dark:text-basic-white mb-4 sm:mb-8"
      >
        Selected Work
      </p>
    </div>

    <div
      class="project-card rounded-3xl border-light-cardBorder dark:border-dark-cardBorder border bg-light-cardBG dark:bg-dark-black_50 flex flex-col justify-around sm:justify-starts sm:flex sm:flex-row mb-9 px-6 py-8 sm:pt-8 sm:pb-0"
    >
      <div class="h-full sm:w-2/3">
        <div class="h-16 w-16 mb-4">
          <img src="../../assets/icons/GB.svg" alt="project-icon" />
        </div>
        <div class="mb-4">
          <p
            class="mb-4 text-basic-onyx dark:text-basic-white text-xl font-extrabold"
          >
            Project Name
          </p>
          <p class="mb-4 text-basic-darkGray text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            cupiditate eos exercitationem nisi perferendis quibusdam quidem quo
            tempore velit. Eius expedita id incidunt magni modi optio porro quae
            quam tenetur?
          </p>
        </div>
        <div
          class="text-basic-onyx dark:text-basic-white text-lg font-medium flex items-center"
        >
          <p class="flex items-center cursor-pointer">
            Download App<Icon
              name="heroicons:arrow-right"
              class="h-6 w-6 ms-2"
            />
          </p>
        </div>
      </div>
      <div class="sm:h-full">
        <img
          src="../../assets/images/iPhone%2014.png"
          class="sm:flex items-end"
          alt="project-img"
        />
      </div>
    </div>

    <div
      class="project-card rounded-3xl border-light-cardBorder dark:border-dark-cardBorder border bg-light-cardBG dark:bg-dark-black_50 flex flex-col justify-around sm:justify-starts sm:flex sm:flex-row mb-9 px-6 py-8 sm:pt-8 sm:pb-0"
    >
      <div class="h-full sm:w-2/3">
        <div class="h-16 w-16 mb-4">
          <img src="../../assets/icons/GB.svg" alt="project-icon" />
        </div>
        <div class="mb-4">
          <p
            class="mb-4 text-basic-onyx dark:text-basic-white text-xl font-extrabold"
          >
            Project Name
          </p>
          <p class="mb-4 text-basic-darkGray text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            cupiditate eos exercitationem nisi perferendis quibusdam quidem quo
            tempore velit. Eius expedita id incidunt magni modi optio porro quae
            quam tenetur?
          </p>
        </div>
        <div
          class="text-basic-onyx dark:text-basic-white text-lg font-medium flex items-center"
        >
          <p class="flex items-center cursor-pointer">
            Download App<Icon
              name="heroicons:arrow-right"
              class="h-6 w-6 ms-2"
            />
          </p>
        </div>
      </div>
      <div class="sm:h-full">
        <img
          src="../../assets/images/iPhone%2014.png"
          class="sm:flex items-end"
          alt="project-img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
