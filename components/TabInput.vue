<template>
  <div v-if="enableComponent" v-bind:class="level ? 'ml-' + level * 8 : ''">
    <div class="w-full px-8 mb-2">
      <div class="relative text-left inline-flex">
        <div>
          <label
            :for="id"
            class="text-md font-semibold text-gray-700 w-auto mt-px"
            >{{ label }}:</label
          >
          <input
            v-bind:id="id"
            type="text"
            class="inline-flex justify-center w-auto rounded-md border border-gray-300 shadow-sm px-4 py-1 ml-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            placeholder="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'listenName', 'hide', 'level'],

  data() {
    return {
      enableComponent: !this.hide ? true : false,
    };
  },

  mounted() {
    this.$root.$on(this.listenName, () => {
      this.enableComponent = !this.enableComponent;
    });
  },
};
</script>
