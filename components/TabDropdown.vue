<template>
  <div class="flex flex-wrap">
    <div class="w-full px-8 mb-2">
      <div class="relative inline-block text-left">
        <!-- TODO: Only enable this when the parent checkbox is enabled -->
        <button
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          style="transition: all 0.15s ease"
          type="button"
          v-on:click="toggleDropdown()"
          ref="btnDropdownRef"
          :id="id"
        >
          {{ dropdownSelectedKey }}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          v-bind:class="{
            hidden: !dropdownPopoverShow,
            block: dropdownPopoverShow,
          }"
          class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 w-full"
          style="min-width: 12rem"
          ref="popoverDropdownRef"
        >
          <div
            v-for="option in options"
            :key="option.name"
            :value="option.value"
            v-bind:class="{
              'selected-item': dropdownSelectedValue === option.value,
              'unselected-item': dropdownSelectedValue !== option.value,
            }"
            class="text-sm py-2 px-4 font-normal block whitespace-no-wrap bg-transparent text-gray-800"
            v-on:click="
              dropdownSelectedValue = option.value;
              dropdownSelectedKey = option.name;
              toggleDropdown();
            "
          >
            {{ option.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';

export default {
  props: ['options', 'text', 'id'],
  data() {
    return {
      dropdownPopoverShow: false,
      dropdownSelectedValue: -1,
      dropdownSelectedKey: this.text,
    };
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        new Popper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start',
        });
      }
    },
  },
};
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.selected-item {
  @apply bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium;
}

.unselected-item {
  @apply text-gray-900 px-3 py-2 rounded-md text-sm font-medium;
  &:hover {
    @apply bg-gray-700 text-white;
  }
}
</style>
