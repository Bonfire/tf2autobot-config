<template>
  <div class="py-4">
    <h2 class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </h2>
    <h4 class="mt-1 max-w-2xl text-sm text-gray-600">
      {{ description }}
    </h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'description'],
};
</script>
