<template>
  <div v-bind:class="level ? 'ml-' + level * 4 : ''">
    <div class="relative text-left inline-flex w-full">
      <div class="w-full">
        <label
          class="text-md font-semibold text-gray-700 w-auto mt-px hint--top hint--rounded hint--large"
          :aria-label="tooltip"
          >{{ label }}:</label
        >
        <input
          :id="id"
          type="number"
          class="inline-flex justify-center w-auto rounded-md border border-gray-500 shadow-sm px-4 py-1 mt-px mb-2 ml-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          :step="step"
          min="0"
          :value="value"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'level', 'step', 'value', 'tooltip'],
};
</script>
