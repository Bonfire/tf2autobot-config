<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-2">
            <div class="flex space-x-4">
              <NuxtLink
                to="/"
                v-bind:class="{
                  'nav-active': pageName === 'Home',
                  'nav-inactive': pageName !== 'Home',
                }"
                >Home</NuxtLink
              >
              <NuxtLink
                to="/generate"
                v-bind:class="{
                  'nav-active': pageName === 'Generate',
                  'nav-inactive': pageName !== 'Generate',
                }"
                >Generate</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['pageName'],
}
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.nav-active {
  @apply bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium;
}

.nav-inactive {
  @apply text-gray-300 px-3 py-2 rounded-md text-sm font-medium;
  &:hover {
    @apply bg-gray-700 text-white;
  }
}
</style>
