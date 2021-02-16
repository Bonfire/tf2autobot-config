<template>
  <div class="flex flex-wrap">
    <div class="container mx-auto">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-sm font-bold px-5 py-3 rounded block leading-normal"
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
            class="text-sm font-bold px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{
              'tab-inactive': openTab !== 2,
              'tab-active': openTab === 2,
            }"
          >
            Trade
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-sm font-bold px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{
              'tab-inactive': openTab !== 3,
              'tab-active': openTab === 3,
            }"
          >
            Utility
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-sm font-bold px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(4)"
            v-bind:class="{
              'tab-inactive': openTab !== 4,
              'tab-active': openTab === 4,
            }"
          >
            Offer
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="text-sm font-bold px-5 py-3 rounded block leading-normal"
            v-on:click="toggleTabs(5)"
            v-bind:class="{
              'tab-inactive': openTab !== 5,
              'tab-active': openTab === 5,
            }"
          >
            Discord
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
                description="These settings determine which alerts to the owner (and admins) in the case of errors or high-value items"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="sendAlertsCheck"
                  label="Send alerts"
                  emitName="sendAlertsChange"
                />
                <SectionSubHeading
                  title="Autokeys Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="lowPureCheck"
                  label="Low pure alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="failedToAddCheck"
                  label="Failed to add key alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="failedToUpdateCheck"
                  label="Failed to update key alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="failedToDisableCheck"
                  label="Failed to disable key alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Backpack Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="backpackFullCheck"
                  label="Backpack full alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="High-Value Items Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="gotDisabledCheck"
                  label="Item disabled alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="notInPricelistCheck"
                  label="Item not in pricelist received alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="tryingToTakeCheck"
                  label="Item not in pricelist requested alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Auto-Remove Failed Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="removeSellFailedCheck"
                  label="Failed to auto-remove item with intent sell alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Auto-Add Painted Items Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="addPaintedItemsCheck"
                  label="Failed to auto-add painted item alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
              </div>
              <SectionHeading
                title="Pricelist Settings"
                description="These settings determine how the pricelist should work"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="filterCantAffordCheck"
                  label="Filter out items the bot can't afford"
                />
                <Checkbox
                  id="removeIntentSellCheck"
                  label="Auto-remove intent sell"
                />
                <Checkbox
                  id="addInvalidItemsCheck"
                  label="Auto-add invalid items"
                />
                <Checkbox
                  id="addPaintedItemsCheck"
                  label="Auto-add painted items"
                />
                <Numeric
                  id="priceAgeNumeric"
                  label="Price age (ms)"
                  level="1"
                  step="100"
                />
              </div>
            </div>
            <!-- TODO: Make these class bindings "smarter" -->
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <SectionHeading
                title="Trade Exception (Bypass) Settings"
                description="These settings determine what types of trades should and shouldn't be accepted"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="allowEscrowCheck"
                  label="Allow trades with escrow (trade hold)"
                />
                <Checkbox
                  id="allowOverpayCheck"
                  label="Allow trades with item/pure overpay"
                />
                <Checkbox
                  id="allowGiftCheck"
                  label="Allow trades without gift messages"
                />
                <Checkbox
                  id="allowBannedAccCheck"
                  label="Allow trades from banned/scammer accounts"
                />
              </div>
              <SectionHeading
                title="Trade Summary Settings"
                description="These settings determine what trade summaries should look like"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="showStockChangesCheck"
                  label="Show item stock changes in trade summary"
                />
                <Checkbox
                  id="showTimeTakenCheck"
                  label="Show trade time taken in trade summary"
                />
                <Checkbox
                  id="showItemPricesCheck"
                  label="Show item prices in trade summary"
                />
                <Checkbox
                  id="showPureEmojiCheck"
                  label="Show pure using emojis in trade summary"
                />
              </div>
              <SectionHeading
                title="High-Value Item Settings"
                description="These settings determine what is considered a High-Value Item and what should be done when receiving a High-Value Item"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="highValueHoldCheck"
                  label="Temporarily disable (hold) high-value items"
                />
                <Input
                  id="highValueSheensInput"
                  label="High-value sheens"
                  placeholder="Team Shine"
                />
                <Input
                  id="highValueKSInput"
                  label="High-value killstreakers"
                  placeholder="Tornado, Fire Horns"
                />
                <Input
                  id="highValuePartsInput"
                  label="High-value strange parts"
                  placeholder="Headshot Kills, Kills"
                />
                <Input
                  id="highValuePaintsInput"
                  label="High-value paints"
                  placeholder="After Eight"
                />
              </div>
              <SectionHeading
                title="Item Normalization Settings"
                description="These settings determine when an item's attributes should and shouldn't affect a trade"
              />
              <div class="flex flex-wrap flex-col">
                <SectionSubHeading title="Festivized Items" />
                <Checkbox
                  id="ourFestivizedCheck"
                  label="Recognize our Festivized items as their non-Festivized variants"
                />
                <Checkbox
                  id="theirFestivizedCheck"
                  label="Recognize our partner's Festivized items as their non-Festivized variants"
                />
                <SectionSubHeading
                  title="Strange As Second Quality (Elevated Quality) Items"
                />
                <Checkbox
                  id="ourStrangeSecondQualityCheck"
                  label="Recognize our items with Strange as a second quality as their non-Strange variants"
                />
                <Checkbox
                  id="theirStrangeSecondQualityCheck"
                  label="Recognize our partner's items with Strange as a second quality as their non-Strange variants"
                />
                <SectionSubHeading title="Painted Items" />
                <Checkbox
                  id="ourPaintedCheck"
                  label="Recognize our painted items as their non-painted variants"
                />
                <Checkbox
                  id="theirPaintedCheck"
                  label="Recognize our partner's painted items as their non-painted variants"
                />
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
              <SectionHeading
                title="Listing Note Settings"
                description="These settings determine what buying and selling listing notes should display"
              />
              <div class="flex flex-wrap flex-col">
                <Input
                  id="listingBuyDetailsInput"
                  label="Listing buy note"
                  placeholder="I am buying your %name% for %price%, I have %current_stock% / %max_stock%."
                />
                <Input
                  id="listingSellDetailsInput"
                  label="Listing sell note"
                  placeholder="I am selling my %name% for %price%, I am selling %amount_trade%."
                />
                <SectionSubHeading title="High-Value Item Parameters" />
                <Checkbox
                  id="showSpellsCheck"
                  label="Show spells in listing notes"
                />
                <Checkbox
                  id="showStrangePartsCheck"
                  label="Show strange parts in listing notes"
                />
                <Checkbox
                  id="showKillstreakersCheck"
                  label="Show killstreakers in listing notes"
                />
                <Checkbox
                  id="showSheensCheck"
                  label="Show sheens in listing notes"
                />
                <Checkbox
                  id="showPaintedCheck"
                  label="Show paint in listing notes"
                />
                <SectionSubHeading title="Custom Uses Parameters" />
                <Input
                  id="listingUsesDuelInput"
                  label="Custom uses parameter for dueling minigames"
                  placeholder="(𝗢𝗡𝗟𝗬 𝗪𝗜𝗧𝗛 𝟱x 𝗨𝗦𝗘𝗦)"
                />
                <Input
                  id="listingUsesNoiseInput"
                  label="Custom uses parameter for noise makers"
                  placeholder="(𝗢𝗡𝗟𝗬 𝗪𝗜𝗧𝗛 𝟐𝟱x 𝗨𝗦𝗘𝗦)"
                />
              </div>
              <SectionHeading
                title="Statistics Settings"
                description="These settings act mostly as a checkpoint for your bot when you delete your polldata"
              />
              <div class="flex flex-wrap flex-col">
                <Numeric
                  id="lastTotalTradesNumeric"
                  label="Last total trades"
                />
                <Input
                  id="startingTimeInput"
                  label="Starting time (unix timestamp)"
                  :placeholder="new Date().valueOf()"
                />
                <Numeric
                  id="lastTotalProfitNumeric"
                  label="Last total profit made (in refined)"
                />
                <Numeric
                  id="lastTotalOverpayNumeric"
                  label="Last total overpay received (in refined)"
                />
                <Numeric
                  id="profitTimestampNumeric"
                  label="Time since last profit (unix timestamp)"
                />
                <SectionSubHeading title="Sending Stats Automatically" />
                <Checkbox
                  id="sendAutomatedStatsCheck"
                  label="Regularly send trade statistics"
                  emitName="sendStatsEvent"
                />
                <Input
                  id="sendStatsIntervalInput"
                  label="Interval to send stats (THH:MM)"
                  listenName="sendStatsEvent"
                  hide="true"
                  level="1"
                />
              </div>
              <SectionHeading
                title="Autokeys Settings"
                description="These settings determine how autokeys should function"
              />
              <div class="flex flex-wrap flex-col">
                <Checkbox
                  id="autokeysEnableCheck"
                  label="Enable autokeys"
                  emitName="autokeysEvent"
                />
                <Numeric
                  id="autokeysMinKeysNumeric"
                  label="Minimum number of keys"
                  level="1"
                  listenName="autokeysEvent"
                  hide="true"
                />
                <Numeric
                  id="autokeysMaxKeysNumeric"
                  label="Maximum number of keys"
                  level="1"
                  listenName="autokeysEvent"
                  hide="true"
                />
                <Numeric
                  id="autokeysMinRefNumeric"
                  label="Minimum amount of refined"
                  level="1"
                  listenName="autokeysEvent"
                  hide="true"
                />
                <Numeric
                  id="autokeysMaxRefNumeric"
                  label="Maximum amount of refined"
                  level="1"
                  listenName="autokeysEvent"
                  hide="true"
                />
              </div>
            </div>
            <div
              v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
            ></div>
            <div
              v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
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
