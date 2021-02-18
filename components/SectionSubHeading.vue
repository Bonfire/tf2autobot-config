<template>
  <div class="mt-1 mb-1" v-bind:class="level ? 'ml-' + level * 4 : ''">
    <h4 class="leading-6 font-medium text-md text-gray-900">
      {{ title }}
    </h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'level'],
};
</script>
