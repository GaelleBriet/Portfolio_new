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
      class="project-card rounded-3xl border-light-cardBorder dark:border-dark-cardBorder border bg-light-cardBG dark:bg-dark-black_50 flex flex-col justify-between sm:flex-row mb-9 px-6 py-8 sm:pt-8 sm:pb-0 overflow-hidden"
    >
      <div class="h-full sm:w-2/3 flex flex-col justify-between">
        <div>
          <div class="h-16 w-16 mb-4">
            <img src="../../assets/icons/GB.svg" alt="GB logo" />
          </div>
          <div class="mb-4">
            <p
              class="mb-4 text-basic-onyx dark:text-basic-white text-xl font-extrabold"
            >
              Project Name
            </p>
            <p class="mb-4 text-basic-darkGray text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cupiditate eos exercitationem nisi perferendis quibusdam quidem
              quo tempore velit. Eius expedita id incidunt magni modi optio
              porro quae quam tenetur?
            </p>
          </div>
        </div>
        <div
          class="text-basic-onyx dark:text-basic-white text-lg font-medium flex items-center mb-4 sm:mb-0"
        >
          <p class="flex items-center cursor-pointer">
            Download App
            <Icon name="heroicons:arrow-right" class="h-6 w-6 ms-2" />
          </p>
        </div>
      </div>
      <div class="sm:w-1/3 hidden sm:flex items-end justify-end">
        <img
          src="../../assets/images/iPhone%2014.png"
          alt="iPhone 14"
          class="max-h-full object-contain"
        />
      </div>
    </div>

    <div
      class="project-card rounded-3xl border-light-cardBorder dark:border-dark-cardBorder border bg-light-cardBG dark:bg-dark-black_50 flex flex-col justify-between sm:flex-row mb-9 px-6 sm:ps-6 sm:pe-0 py-8 sm:pt-8 sm:pb-0 overflow-hidden"
    >
      <div class="h-full sm:w-2/3 flex flex-col justify-between">
        <div>
          <div class="h-16 w-16 mb-4">
            <img src="../../assets/icons/GB.svg" alt="GB logo" />
          </div>
          <div class="mb-4">
            <p
              class="mb-4 text-basic-onyx dark:text-basic-white text-xl font-extrabold"
            >
              Project Name
            </p>
            <p class="mb-4 text-basic-darkGray text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              cupiditate eos exercitationem nisi perferendis quibusdam quidem
              quo tempore velit. Eius expedita id incidunt magni modi optio
              porro quae quam tenetur?
            </p>
          </div>
        </div>
        <div
          class="text-basic-onyx dark:text-basic-white text-lg font-medium flex items-center mb-4 sm:mb-0"
        >
          <p class="flex items-center cursor-pointer">
            Download App
            <Icon name="heroicons:arrow-right" class="h-6 w-6 ms-2" />
          </p>
        </div>
      </div>
      <div class="sm:w-1/3 hidden sm:block relative">
        <img
          src="../../assets/images/iPad%20&%20Apple%20Pencil.png"
          alt="iPad & Apple Pencil"
          class="absolute bottom-0 right-0 max-h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
