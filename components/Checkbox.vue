<template>
  <div v-if="enableComponent">
    <label
      class="inline-flex items-center cursor-pointer"
      v-bind:class="level ? 'ml-' + level * 8 : ''"
      ><input
        v-bind:id="id"
        type="checkbox"
        class="form-checkbox text-gray-800 ml-1 w-5 h-6"
        style="transition: all 0.15s ease 0s"
        @change="checkboxChanged()"
      /><span class="ml-2 text-md font-semibold text-gray-700">{{
        label
      }}</span></label
    >
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'emitName', 'listenName', 'hide', 'level'],

  data() {
    return {
      enableComponent: !this.hide ? true : false,
    };
  },

  methods: {
    checkboxChanged: function () {
      if (this.emitName) {
        this.$root.$emit(this.emitName);
      }
    },
  },

  mounted() {
    this.$root.$on(this.listenName, () => {
      this.enableComponent = !this.enableComponent;
    });
  },
};
</script>
