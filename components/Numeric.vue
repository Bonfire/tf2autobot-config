<template>
  <div>
    <label class="inline-flex items-center cursor-pointer mb-1"
      ><span class="ml-8 text-md font-semibold text-gray-700">{{ text }}</span
      ><input
        v-bind:id="id"
        type="number"
        class="rounded text-md shadow text-gray-800 ml-4 w-8 h-6"
    /></label>
  </div>
</template>

<script>
export default {
  props: ['id', 'text'],
}
</script>
