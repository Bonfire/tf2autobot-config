<template>
  <div class="mt-1 mb-1" v-if="enableComponent">
    <h4
      class="leading-6 font-medium text-md text-gray-900"
      v-bind:class="level ? 'ml-' + level * 8 : ''"
    >
      {{ title }}
    </h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'listenName', 'hide', 'level'],

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
