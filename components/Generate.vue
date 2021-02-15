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
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded shadow"
      >
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <SectionHeading
                title="General Settings"
                description="These settings determine general bot functionality"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox id="showOnlyMetalCheck" label="Show only metal" />
                <Checkbox
                  id="sortInventoryCheck"
                  label="Sort inventory"
                  emitName="sortInventoryChange"
                />
                <Dropdown
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
                <Checkbox id="createListingsCheck" label="Create listings" />
                <Checkbox id="addAsFriendCheck" label="Add as a friend" />
                <Checkbox id="sendGroupInviteCheck" label="Send group invite" />
                <Checkbox id="autobumpCheck" label="Autobump (auto-relist)" />
                <Checkbox id="skipItemsCheck" label="Skip items in trade" />
                <Checkbox
                  id="wepsCurrencyCheck"
                  label="Weapons as currency"
                  emitName="wepsCurrencyChange"
                />
                <Checkbox
                  id="wepsCurrencyUncraftCheck"
                  label="Include uncraftable weapons"
                  listenName="wepsCurrencyChange"
                  hide="true"
                  level="1"
                />
                <Checkbox
                  id="fullUsesCheck"
                  label="Full uses check"
                  emitName="fullUsesChange"
                />
                <Checkbox
                  id="fullUsesDuelCheck"
                  label="Dueling minigame"
                  listenName="fullUsesChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="fullUsesNoiseCheck"
                  label="Noise maker"
                  listenName="fullUsesChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="playOnlyTF2Check"
                  label="Display TF2 as running game"
                  emitName="playTF2Change"
                />
                <Input
                  id="playCustomGameInput"
                  label="Custom game name"
                  listenName="playTF2Change"
                  level="1"
                />
              </div>
              <SectionHeading
                title="Alert Settings"
                description="These settings provide alerts to the owner in the case of errors or high-value items"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="sendAlertsCheck"
                  label="Send alerts"
                  emitName="sendAlertsChange"
                />
              </div>
            </div>
            <!-- TODO: Make these class bindings "smarter" -->
            <div
              v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
