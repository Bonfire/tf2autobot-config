<template>
  <div class="flex flex-wrap">
    <div class="container mx-auto">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{
              'tab-inactive': openTab !== 1,
              'tab-active': openTab === 1,
            }"
          >
            General
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'tab-inactive': openTab !== 2,
              'tab-active': openTab === 2,
            }"
          >
            Alerts
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'tab-inactive': openTab !== 3,
              'tab-active': openTab === 3,
            }"
          >
            Pricelist
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(4)"
            v-bind:class="{
              'tab-inactive': openTab !== 4,
              'tab-active': openTab === 4,
            }"
          >
            Exceptions
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded shadow"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <TabHeading
                title="General Settings"
                description="These settings determine general bot functionality"
              />

              <div class="flex flex-wrap flex-col">
                <TabCheckbox id="showOnlyMetalCheck" label="Show only metal" />
                <TabCheckbox
                  id="sortInventoryCheck"
                  label="Sort inventory"
                  emitName="sortInventoryChange"
                />
                <TabDropdown
                  id="sortInventoryDropdown"
                  label="Sorting type"
                  listenName="sortInventoryChange"
                  hide="true"
                  :options="[
                    { name: 'Name', value: 1 },
                    { name: 'Defindex', value: 2 },
                    { name: 'Rarity', value: 3 },
                    { name: 'Type', value: 4 },
                    { name: 'Date', value: 5 },
                    { name: 'Class', value: 101 },
                    { name: 'Slot', value: 102 },
                  ]"
                />
                <TabCheckbox id="createListingsCheck" label="Create listings" />
                <TabCheckbox id="addAsFriendCheck" label="Add as a friend" />
                <TabCheckbox
                  id="sendGroupInviteCheck"
                  label="Send group invite"
                />
                <TabCheckbox
                  id="autobumpCheck"
                  label="Autobump (auto-relist)"
                />
                <TabCheckbox id="skipItemsCheck" label="Skip items in trade" />
                <TabCheckbox
                  id="wepsCurrencyCheck"
                  label="Weapons as currency"
                  emitName="wepsCurrencyChange"
                />
                <TabCheckbox
                  id="wepsCurrencyUncraftCheck"
                  label="Include uncraftable weapons"
                  listenName="wepsCurrencyChange"
                  hide="true"
                  level="1"
                />
                <TabCheckbox
                  id="fullUsesCheck"
                  label="Full uses check"
                  emitName="fullUsesChange"
                />
                <TabCheckbox
                  id="fullUsesDuelCheck"
                  label="Dueling minigame"
                  listenName="fullUsesChange"
                  level="1"
                  hide="true"
                />
                <TabCheckbox
                  id="fullUsesNoiseCheck"
                  label="Noise maker"
                  listenName="fullUsesChange"
                  level="1"
                  hide="true"
                />
                <TabCheckbox
                  id="playOnlyTF2Check"
                  label="Display TF2 as running game"
                  emitName="playTF2Change"
                />
                <TabInput
                  id="playCustomGameInput"
                  label="Custom game name"
                  listenName="playTF2Change"
                  level="1"
                />
              </div>
            </div>
            <!-- TODO: Make these class bindings "smarter" -->
            <div
              v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
            ></div>
            <div
              v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
            ></div>
            <div
              v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabNumeric from './TabNumeric.vue';
export default {
  components: { TabNumeric },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style lang="postcss">
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.tab-active {
  @apply bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium;
}

.tab-inactive {
  @apply text-gray-300 px-3 py-2 rounded-md text-sm font-medium bg-gray-700;
}
</style>
