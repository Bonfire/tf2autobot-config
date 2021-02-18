<template>
  <div v-bind:class="level ? 'ml-' + level * 4 : ''">
    <label class="inline-flex items-center cursor-pointer"
      ><input
        v-bind:id="id"
        type="checkbox"
        class="form-checkbox text-gray-800 ml-1 w-5 h-6"
        style="transition: all 0.15s ease 0s"
        :checked="value"
      /><span class="ml-2 text-md font-semibold text-gray-700">{{
        label
      }}</span></label
    >
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'level', 'value'],
};
</script>
