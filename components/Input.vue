<template>
  <div v-bind:class="level ? 'ml-' + level * 4 : ''">
    <div class="relative text-left inline-flex w-full">
      <div class="w-full">
        <label class="text-md font-semibold text-gray-700 w-auto mt-px"
          >{{ label }}:</label
        >
        <input
          v-bind:id="id"
          type="text"
          class="inline-flex justify-center w-1/3 rounded-md border border-gray-500 shadow-sm px-4 py-1 mt-px ml-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          :value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'level', 'value'],
};
</script>
