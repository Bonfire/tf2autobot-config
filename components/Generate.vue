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
              <div class="flex flex-col">
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
              <div class="flex flex-col">
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
                <SectionSubHeading
                  title="Failed To Accept Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="failedAcceptCheck"
                  label="Failed to accept a trade offer alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Unable To Process Offer Alert Settings"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="unableToProcessCheck"
                  label="Unable to process a trade offer alert"
                  listenName="sendAlertsChange"
                  level="1"
                  hide="true"
                />
              </div>
              <SectionHeading
                title="Pricelist Settings"
                description="These settings determine how the pricelist should work"
              />
              <div class="flex flex-col">
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
                  label="Price age (seconds)"
                  step="100"
                />
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <SectionHeading
                title="Trade Exception (Bypass) Settings"
                description="These settings determine what types of trades should and shouldn't be accepted"
              />
              <div class="flex flex-col">
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
              <div class="flex flex-col">
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
              <div class="flex flex-col">
                <Checkbox
                  id="highValueHoldCheck"
                  label="Enable the holding of high-value items"
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
              <div class="flex flex-col">
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
              <div class="flex flex-col">
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
              <div class="flex flex-col">
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
                <Input
                  id="profitTimestampNumeric"
                  label="Time since last profit (unix timestamp)"
                  :placeholder="new Date().valueOf()"
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
              <div class="flex flex-col">
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
                <SectionSubHeading
                  title="Autokeys Banking"
                  listenName="autokeysEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="autokeysBankCheck"
                  label="Enable autokeys banking"
                  listenName="autokeysEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Autokeys Scrap Adjustment"
                  listenName="autokeysEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="autokeysScrapAdjustCheck"
                  label="Enable autokeys scrap adjustment"
                  listenName="autokeysEvent"
                  emitName="scrapAdjustEvent"
                  level="1"
                  hide="true"
                />
                <Numeric
                  id="autokeysMaxRefNumeric"
                  label="Maximum amount of refined (in scrap)"
                  level="2"
                  listenName="scrapAdjustEvent"
                  hide="true"
                />
                <SectionSubHeading
                  title="Autokeys Accept Understocked"
                  listenName="autokeysEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="autokeysUnderCheck"
                  label="Enable autokeys accepting understocked trades"
                  listenName="autokeysEvent"
                  level="1"
                  hide="true"
                />
              </div>
              <SectionHeading
                title="Crafting/Smelting Settings"
                description="These settings determine how the bot should craft/smelt items"
              />
              <div class="flex flex-col">
                <Checkbox
                  id="smeltWeaponsCheck"
                  label="Enable the smelting of scrap weapons into scrap"
                />
                <SectionSubHeading title="Metal Smelting Settings" />
                <Checkbox
                  id="metalSmeltingCheck"
                  label="Enable the crafting/smelting of metals into other denominations"
                  emitName="metalSmeltEvent"
                />
                <Numeric
                  id="minScrapNumeric"
                  label="Minimum amount of scrap metal to hold"
                  level="1"
                  listenName="metalSmeltEvent"
                  hide="true"
                />
                <Numeric
                  id="minRecNumeric"
                  label="Minimum amount of reclaimed metal to hold"
                  level="1"
                  listenName="metalSmeltEvent"
                  hide="true"
                />
                <Numeric
                  id="smeltThresholdNumeric"
                  label="Upgrade metal to next denomination threshold"
                  level="1"
                  listenName="metalSmeltEvent"
                  hide="true"
                />
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }">
              <SectionHeading
                title="Received Offer Filter Settings"
                description="These settings determine what types of offers should and shouldn't be accepted"
              />
              <div class="flex flex-col">
                <SectionSubHeading title="Invalid Value Offers" />
                <Checkbox
                  id="invalidValueCheck"
                  label="Allow trades with invalid values"
                  emitName="invalidValueEvent"
                />
                <Input
                  id="invalidValueSKUInput"
                  label="SKUs that should bypass invalid value"
                  listenName="invalidValueEvent"
                  level="1"
                  hide="true"
                />
                <Numeric
                  id="invalidValueBypassNumeric"
                  label="Value difference of a bypass SKU for it to bypass invalid value (in ref)"
                  listenName="invalidValueEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="invalidValueMessageInput"
                  label="Custom invalid value decline message"
                />
                <SectionSubHeading title="Invalid Item Offers" />
                <Checkbox
                  id="invalidItemDeclineCheck"
                  label="Allow trades with invalid items"
                  emitName="invalidItemEvent"
                />
                <Checkbox
                  id="invalidItemPriceCheck"
                  label="Give invalid items prices (from prices.tf)"
                  listenName="invalidItemEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="invalidItemOverpayCheck"
                  label="Automatically accept invalid items if overpay"
                  listenName="invalidItemEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="invalidItemMessageInput"
                  label="Custom invalid item decline message"
                />
                <SectionSubHeading title="Disabled Item Offers" />
                <Checkbox
                  id="disabledItemDeclineCheck"
                  label="Allow trades with disabled items"
                  emitName="disabledItemEvent"
                />
                <Checkbox
                  id="disabledItemOverpayCheck"
                  label="Automatically accept disabled items if overpay"
                  listenName="disabledItemEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="disabledItemMessageInput"
                  label="Custom disabled item decline message"
                />
                <SectionSubHeading title="Overstocked Item Offers" />
                <Checkbox
                  id="overstockedItemDeclineCheck"
                  label="Allow trades with overstocked items"
                  emitName="overstockedItemEvent"
                />
                <Checkbox
                  id="overstockedItemOverpayCheck"
                  label="Automatically accept overstocked items if overpay"
                  listenName="overstockedItemEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="overstockedItemMessageInput"
                  label="Custom overstocked item decline message"
                />
                <SectionSubHeading title="Understocked Item Offers" />
                <Checkbox
                  id="understockedItemDeclineCheck"
                  label="Allow trades with understocked items"
                  emitName="understockedItemEvent"
                />
                <Checkbox
                  id="understockedItemOverpayCheck"
                  label="Automatically accept understocked items if overpay"
                  listenName="understockedItemEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="understockedItemMessageInput"
                  label="Custom understocked item decline message"
                />
                <SectionSubHeading title="Duped Item Offers" />
                <Checkbox
                  id="dupedItemCheck"
                  label="Check for duped items in trade offers"
                  emitName="dupedItemEvent"
                />
                <Numeric
                  id="dupedMinKeysNumeric"
                  label="Minimum number of keys an item must be worth before it is dupe checked"
                  listenName="dupedItemEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="dupedItemDeclineCheck"
                  label="Automatically decline trades with duped items"
                  listenName="dupedItemEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="dupedItemMessageInput"
                  label="Custom duped item decline message"
                  listenName="dupedItemEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading title="Escrow Check Failures" />
                <Checkbox
                  id="escrowFailCheck"
                  label="Ignore escrow check failures"
                />
                <SectionSubHeading title="Banned Check Failures" />
                <Checkbox
                  id="bannedFailCheck"
                  label="Ignore banned check failures"
                />
              </div>
              <SectionHeading
                title="Manual Review Settings"
                description="These settings determine when manual reviews should be created and what information they should provide"
              />
              <div class="flex flex-col">
                <Checkbox
                  id="reviewCheck"
                  label="Enable manual trade reviews"
                  emitName="reviewEvent"
                />
                <SectionSubHeading
                  title="Manual Review General Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewSummaryCheck"
                  label="Show trade summaries for offers held in review to the trade partner"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewNoteCheck"
                  label="Show hold reasons for offers held in review"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewTimeCheck"
                  label="Show the owner's current time to the trade partner when a trade is held for review"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewPriceCheck"
                  label="Show the prices of items that are held for review"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Invalid Value Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewValueNoteInput"
                  label="Note provided to the trade partner when a trade is held due to invalid value"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Invalid Items Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewItemsNoteInput"
                  label="Note provided to the trade partner when a trade is held due to invalid items"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Disabled Items Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewDisabledNoteInput"
                  label="Note provided to the trade partner when a trade is held due to disabled items"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Overstocked Items Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewOverstockedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to overstocked items"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Understocked Items Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewUnderstockedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to understocked items"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Duped Items Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewDupedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to duped items"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading
                  title="Other Review Settings"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewDupeFailNoteInput"
                  label="Note provided to the trade partner when a trade is held due to a dupe check failure"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewEscrowNoteInput"
                  label="Note provided to the trade partner when a trade is held due to an escrow check failure"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewBanNoteInput"
                  label="Note provided to the trade partner when a trade is held due to a banned check failure"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="reviewCustomNoteInput"
                  label="Custom note provided to the trade partner for all manual review holds"
                  listenName="reviewEvent"
                  level="1"
                  hide="true"
                />
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }">
              <SectionHeading
                title="Discord Webhook Settings"
                description="These settings determine how the bot's Discord Webhook should be setup"
              />
              <div class="flex flex-col">
                <Input id="webhookOwnerIDInput" label="Owner's Discord ID" />
                <Input id="webhookNameInput" label="Webhook name" />
                <Input id="webhookAvatarInput" label="Webhook avatar URL" />
                <Input
                  id="webhookColorInput"
                  label="Webhook embed color"
                  placeholder="16769280"
                />
              </div>
              <SectionHeading
                title="Webhook Content Settings"
                description="These settings determine what trade-related messages sent on Discord should look like"
              />
              <div class="flex flex-col">
                <SectionSubHeading title="Trade Summary Settings" />
                <Checkbox
                  id="discordSummaryCheck"
                  label="Enable discord webhook messages for trade summaries"
                  emitName="discordSummaryEvent"
                />
                <Input
                  id="summaryURLInput"
                  label="Trade summary webhook URL"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="summaryLinksCheck"
                  label="Show trade partner quick links in summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="summaryKeyRateCheck"
                  label="Show the bot's key rate in summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="summaryPureCheck"
                  label="Show the bot's pure stock in summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="summaryInventoryCheck"
                  label="Show bot's inventory statistics in summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="mentionEnableCheck"
                  label="Mention the owner when sending trade summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                  emitName="mentionEvent"
                />
                <Input
                  id="mentionSKUInput"
                  label="The bot should mention the owner when a trade contains these SKUs"
                  listenName="mentionEvent"
                  level="2"
                  hide="true"
                />
                <Numeric
                  id="mentionValueNumeric"
                  label="Mention for any trades higher than this value (in ref)"
                  listenName="mentionEvent"
                  level="2"
                  hide="true"
                />
                <Input
                  id="summaryNoteInput"
                  label="Custom notes that should be included in summaries"
                  listenName="discordSummaryEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading title="Trade Offer Review Settings" />
                <Checkbox
                  id="discordReviewCheck"
                  label="Enable discord webhook message for manual reviews"
                  emitName="discordReviewEvent"
                />
                <Input
                  id="reviewURLInput"
                  label="Manual review webhook URL"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewInvalidCheck"
                  label="Mention the owner for invalid value manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewMentionCheck"
                  label="Mention the owner for general manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewLinksCheck"
                  label="Show trade partner quick links in manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewKeyRateCheck"
                  label="Show the bot's key rate in manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewPureCheck"
                  label="Show the bot's pure stock in manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <Checkbox
                  id="reviewInventoryCheck"
                  label="Show bot's inventory statistics in manual reviews"
                  listenName="discordReviewEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading title="Price Update Settings" />
                <Checkbox
                  id="priceUpdateCheck"
                  label="Enable discord webhook price updates"
                  emitName="discordPriceEvent"
                />
                <Input
                  id="updateURLInput"
                  label="Price update webhook URL"
                  listenName="discordPriceEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="updateNoteInput"
                  label="Custom notes that should be included in price updates"
                  listenName="discordPriceEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading title="Alert Settings" />
                <Checkbox
                  id="discordAlertCheck"
                  label="Enable discord webhook alerts"
                  emitName="discordAlertEvent"
                />
                <Checkbox
                  id="alertMentionCheck"
                  label="Mention the owner when there is an alert"
                  listenName="discordAlertEvent"
                  level="1"
                  hide="true"
                />
                <Input
                  id="alertURLInput"
                  label="Alert webhook URL"
                  listenName="discordAlertEvent"
                  level="1"
                  hide="true"
                />
                <SectionSubHeading title="Statistics Settings" />
                <Checkbox
                  id="discordStatsCheck"
                  label="Enable discord webhook statistics"
                  emitName="discordStatsEvent"
                />
                <Input
                  id="statsURLInput"
                  label="Stats webhook URL"
                  listenName="discordStatsEvent"
                  level="1"
                  hide="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded shadow"
      >
        <button
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          @click="generateOptions()"
        >
          Generate Options (TODO)
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import optionsJSON from '../static/Options.json';

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
    generateOptions() {
      if (optionsJSON) {
        // General Settings / miscSettings
        optionsJSON.miscSettings.showOnlyMetal.enable = this.getElementChecked(
          'showOnlyMetalCheck'
        );
        optionsJSON.miscSettings.sortInventory.enable = this.getElementChecked(
          'sortInventoryCheck'
        );

        if (optionsJSON.miscSettings.sortInventory.enable) {
          optionsJSON.miscSettings.sortInventory.type = this.getElementIntValue(
            'sortInventoryDropdown'
          );
        }

        optionsJSON.miscSettings.createListings.enable = this.getElementChecked(
          'createListingsCheck'
        );
        optionsJSON.miscSettings.addFriends.enable = this.getElementChecked(
          'addAsFriendCheck'
        );
        optionsJSON.miscSettings.sendGroupInvite.enable = this.getElementChecked(
          'sendGroupInviteCheck'
        );
        optionsJSON.miscSettings.autobump.enable = this.getElementChecked(
          'autobumpCheck'
        );
        optionsJSON.miscSettings.skipItemsInTrade.enable = this.getElementChecked(
          'skipItemsCheck'
        );
        optionsJSON.miscSettings.weaponsAsCurrency.enable = this.getElementChecked(
          'wepsCurrencyCheck'
        );

        if (optionsJSON.miscSettings.weaponsAsCurrency.enable) {
          optionsJSON.miscSettings.weaponsAsCurrency.withUncraft = this.getElementChecked(
            'wepsCurrencyUncraftCheck'
          );
        }

        if (this.getElementChecked('fullUsesCheck')) {
          optionsJSON.miscSettings.checkUses.duel = this.getElementChecked(
            'fullUsesDuelCheck'
          );
          optionsJSON.miscSettings.checkUses.noiseMaker = this.getElementChecked(
            'fullUsesNoiseCheck'
          );
        }

        if (this.getElementChecked('playOnlyTF2Check')) {
          optionsJSON.miscSettings.game.playOnlyTF2 = true;
        } else {
          optionsJSON.miscSettings.game.customName = this.getElementValue(
            'playCustomGameInput'
          )
            ? this.getElementValue('playCustomGameInput')
            : '';
        }

        // Alert Settings / sendAlert

        optionsJSON.sendAlert.enable = this.getElementChecked(
          'sendAlertsCheck'
        );
        if (optionsJSON.sendAlert.enable) {
          optionsJSON.sendAlert.autokeys.lowPure = this.getElementChecked(
            'lowPureCheck'
          );
          optionsJSON.sendAlert.autokeys.failedToAdd = this.getElementChecked(
            'failedToAddCheck'
          );
          optionsJSON.sendAlert.autokeys.failedToUpdate = this.getElementChecked(
            'failedToUpdateCheck'
          );
          optionsJSON.sendAlert.autokeys.failedToDisable = this.getElementChecked(
            'failedToDisableCheck'
          );

          optionsJSON.sendAlert.backpackFull = this.getElementChecked(
            'backpackFullCheck'
          );

          optionsJSON.sendAlert.highValue.gotDisabled = this.getElementChecked(
            'gotDisabledCheck'
          );
          optionsJSON.sendAlert.highValue.receivedNotInPricelist = this.getElementChecked(
            'notInPricelistCheck'
          );
          optionsJSON.sendAlert.highValue.tryingToTake = this.getElementChecked(
            'tryingToTakeCheck'
          );

          optionsJSON.sendAlert.autoRemoveIntentSellFailed = this.getElementChecked(
            'removeSellFailedCheck'
          );
          optionsJSON.sendAlert.autoAddPaintedItems = this.getElementChecked(
            'addPaintedItemsCheck'
          );
          optionsJSON.sendAlert.failedAccept = this.getElementChecked(
            'failedAcceptCheck'
          );
          optionsJSON.sendAlert.unableToProcessOffer = this.getElementChecked(
            'unableToProcessCheck'
          );
        }

        // Pricelist Settings / pricelist

        optionsJSON.pricelist.filterCantAfford.enable = this.getElementChecked(
          'filterCantAffordCheck'
        );
        optionsJSON.pricelist.autoRemoveIntentSell.enable = this.getElementChecked(
          'removeIntentSellCheck'
        );
        optionsJSON.pricelist.autoAddInvalidItems.enable = this.getElementChecked(
          'addInvalidItemsCheck'
        );
        optionsJSON.pricelist.autoAddPaintedItems.enable = this.getElementChecked(
          'addPaintedItemsCheck'
        );
        optionsJSON.pricelist.priceAge.maxInSeconds = this.getElementIntValue(
          'priceAgeNumeric'
        );

        // Trade Exception (Bypass) Settings / bypass

        optionsJSON.bypass.escrow.allow = this.getElementChecked(
          'allowEscrowCheck'
        );
        optionsJSON.bypass.overpay.allow = this.getElementChecked(
          'allowOverpayCheck'
        );
        optionsJSON.bypass.giftWithoutMessage.allow = this.getElementChecked(
          'allowGiftCheck'
        );
        optionsJSON.bypass.bannedPeople.allow = this.getElementChecked(
          'allowBannedAccCheck'
        );

        // Trade Summary Settings / tradeSummary

        optionsJSON.tradeSummary.showStockChanges = this.getElementChecked(
          'showStockChangesCheck'
        );
        optionsJSON.tradeSummary.showTimeTakenInMS = this.getElementChecked(
          'showTimeTakenCheck'
        );
        optionsJSON.tradeSummary.showItemPrices = this.getElementChecked(
          'showItemPricesCheck'
        );
        optionsJSON.tradeSummary.showPureInEmoji = this.getElementChecked(
          'showPureEmojiCheck'
        );

        // High-Value Item Settings / highValue

        optionsJSON.highValue.enableHold = this.getElementChecked(
          'highValueHoldCheck'
        );
        optionsJSON.highValue.sheens = this.getStringArray(
          'highValueSheensInput'
        );
        optionsJSON.highValue.killstreakers = this.getStringArray(
          'highValueKSInput'
        );
        optionsJSON.highValue.strangeParts = this.getStringArray(
          'highValuePartsInput'
        );
        optionsJSON.highValue.painted = this.getStringArray(
          'highValuePaintsInput'
        );

        // Item Normalization Settings / normalize

        optionsJSON.normalize.festivized.our = this.getElementChecked(
          'ourFestivizedCheck'
        );
        optionsJSON.normalize.festivized.their = this.getElementChecked(
          'theirFestivizedCheck'
        );
        optionsJSON.normalize.strangeAsSecondQuality.our = this.getElementChecked(
          'ourStrangeSecondQualityCheck'
        );
        optionsJSON.normalize.strangeAsSecondQuality.their = this.getElementChecked(
          'theirStrangeSecondQualityCheck'
        );
        optionsJSON.normalize.painted.our = this.getElementChecked(
          'ourPaintedCheck'
        );
        optionsJSON.normalize.painted.their = this.getElementChecked(
          'theirPaintedCheck'
        );

        // Listing Note Settings / details

        optionsJSON.details.buy = this.getElementValue(
          'listingBuyDetailsInput'
        );
        optionsJSON.details.sell = this.getElementValue(
          'listingSellDetailsInput'
        );

        optionsJSON.details.highValue.showSpells = this.getElementChecked(
          'showSpellsCheck'
        );
        optionsJSON.details.highValue.showStrangeParts = this.getElementChecked(
          'showStrangePartsCheck'
        );
        optionsJSON.details.highValue.showKillstreaker = this.getElementChecked(
          'showKillstreakersCheck'
        );
        optionsJSON.details.highValue.showSheen = this.getElementChecked(
          'showSheensCheck'
        );
        optionsJSON.details.highValue.showPainted = this.getElementChecked(
          'showPaintedCheck'
        );

        optionsJSON.details.uses.duel = this.getElementValue(
          'listingUsesDuelInput'
        );
        optionsJSON.details.uses.noiseMaker = this.getElementValue(
          'listingUsesNoiseInput'
        );

        // Statistics Settings / statistics

        optionsJSON.statistics.lastTotalTrades = this.getElementIntValue(
          'lastTotalTradesNumeric'
        );
        optionsJSON.statistics.startingTimeInUnix = this.getElementIntValue(
          'startingTimeInput'
        );
        optionsJSON.statistics.lastTotalProfitMadeInRef = this.getElementIntValue(
          'lastTotalProfitNumeric'
        );
        optionsJSON.statistics.lastTotalProfitOverpayInRef = this.getElementIntValue(
          'lastTotalOverpayNumeric'
        );
        optionsJSON.statistics.profitDataSinceInUnix = this.getElementIntValue(
          'profitTimestampNumeric'
        );

        optionsJSON.statistics.sendStats.enable = this.getElementChecked(
          'sendAutomatedStatsCheck'
        );

        if (optionsJSON.statistics.sendStats.enable) {
          optionsJSON.statistics.sendStats.time = this.getStringArray(
            'sendStatsIntervalInput'
          );
        }

        // Autokeys Settings / autokeys

        optionsJSON.autokeys.enable = this.getElementChecked(
          'autokeysEnableCheck'
        );
        if (optionsJSON.autokeys.enable) {
          optionsJSON.autokeys.minKeys = this.getElementIntValue(
            'autokeysMinKeysNumeric'
          );
          optionsJSON.autokeys.maxKeys = this.getElementIntValue(
            'autokeysMaxKeysNumeric'
          );
          optionsJSON.autokeys.minRefined = this.getElementIntValue(
            'autokeysMinRefNumeric'
          );
          optionsJSON.autokeys.maxRefined = this.getElementIntValue(
            'autokeysMaxRefNumeric'
          );

          optionsJSON.autokeys.banking.enable = this.getElementChecked(
            'autokeysBankCheck'
          );
          optionsJSON.autokeys.scrapAdjustment.enable = this.getElementChecked(
            'autokeysScrapAdjustCheck'
          );
          optionsJSON.autokeys.scrapAdjustment.value = this.getElementIntValue(
            'autokeysMaxRefNumeric'
          );
          optionsJSON.autokeys.accept.understock = this.getElementIntValue(
            'autokeysUnderCheck'
          );
        }

        // Crafting/Smelting Settings / crafting

        optionsJSON.crafting.weapons.enable = this.getElementChecked(
          'smeltWeaponsCheck'
        );

        optionsJSON.crafting.metals.enable = this.getElementChecked(
          'metalSmeltingCheck'
        );
        if (optionsJSON.crafting.metals.enable) {
          optionsJSON.crafting.metals.minScrap = this.getElementIntValue(
            'minScrapNumeric'
          );
          optionsJSON.crafting.metals.minRec = this.getElementIntValue(
            'minRecNumeric'
          );
          optionsJSON.crafting.metals.threshold = this.getElementIntValue(
            'smeltThresholdNumeric'
          );
        }

        // Received Offer Filter Settings / offerReceived

        optionsJSON.offerReceived.invalidValue.autoDecline.enable = this.getElementChecked(
          'invalidValueCheck'
        );
        optionsJSON.offerReceived.invalidValue.autoDecline.declineReply = this.getElementValue(
          'invalidValueMessageInput'
        );
        if (optionsJSON.offerReceived.invalidValue.autoDecline.enable) {
          optionsJSON.offerReceived.invalidValue.exceptionValue.skus = this.getStringArray(
            'invalidValueSKUInput'
          );
          optionsJSON.offerReceived.invalidValue.exceptionValue.valueInRef = this.getElementIntValue(
            'invalidValueBypassNumeric'
          );
        }

        optionsJSON.offerReceived.invalidItems.autoDecline.enable = this.getElementChecked(
          'invalidItemDeclineCheck'
        );
        optionsJSON.offerReceived.invalidItems.autoDecline.declineReply = this.getElementValue(
          'invalidItemMessageInput'
        );
        if (optionsJSON.offerReceived.invalidItems.autoDecline.enable) {
          optionsJSON.offerReceived.invalidItems.givePrice = this.getElementChecked(
            'invalidItemPriceCheck'
          );
          optionsJSON.offerReceived.invalidItems.autoAcceptOverpay = this.getElementChecked(
            'invalidItemOverpayCheck'
          );
        }

        optionsJSON.offerReceived.disabledItems.autoDecline.enable = this.getElementChecked(
          'disabledItemDeclineCheck'
        );
        optionsJSON.offerReceived.disabledItems.autoDecline.declineReply = this.getElementValue(
          'disabledItemMessageInput'
        );
        if (optionsJSON.offerReceived.disabledItems.autoDecline.enable) {
          optionsJSON.offerReceived.disabledItems.autoAcceptOverpay = this.getElementChecked(
            'disabledItemOverpayCheck'
          );
        }

        optionsJSON.offerReceived.overstocked.autoDecline.enable = this.getElementChecked(
          'overstockedItemDeclineCheck'
        );
        optionsJSON.offerReceived.overstocked.autoDecline.declineReply = this.getElementValue(
          'overstockedItemMessageInput'
        );
        if (optionsJSON.offerReceived.overstocked.autoDecline.enable) {
          optionsJSON.offerReceived.overstocked.autoAcceptOverpay = this.getElementChecked(
            'overstockedItemOverpayCheck'
          );
        }

        optionsJSON.offerReceived.understocked.autoDecline.enable = this.getElementChecked(
          'understockedItemDeclineCheck'
        );
        optionsJSON.offerReceived.understocked.autoDecline.declineReply = this.getElementValue(
          'understockedItemMessageInput'
        );
        if (optionsJSON.offerReceived.understocked.autoDecline.enable) {
          optionsJSON.offerReceived.understocked.autoAcceptOverpay = this.getElementChecked(
            'understockedItemOverpayCheck'
          );
        }

        optionsJSON.offerReceived.duped.enableCheck = this.getElementChecked(
          'dupedItemCheck'
        );
        if (optionsJSON.offerReceived.duped.autoDecline.enable) {
          optionsJSON.offerReceived.duped.minKeys = this.getElementIntValue(
            'dupedMinKeysNumeric'
          );
          optionsJSON.offerReceived.duped.autoDecline.enable = this.getElementChecked(
            'dupedItemDeclineCheck'
          );
          optionsJSON.offerReceived.duped.autoDecline.declineReply = this.getElementValue(
            'dupedItemMessageInput'
          );
        }

        optionsJSON.offerReceived.escrowCheckFailed.ignoreFailed = this.getElementChecked(
          'escrowFailCheck'
        );

        optionsJSON.offerReceived.bannedCheckFailed.ignoreFailed = this.getElementChecked(
          'bannedFailCheck'
        );

        console.log(optionsJSON);
      }
    },
    getElementChecked(ID) {
      return document.getElementById(ID).checked;
    },
    getElementValue(ID) {
      return document.getElementById(ID).value;
    },
    getElementIntValue(ID) {
      return parseInt(document.getElementById(ID).value);
    },
    getStringArray(ID) {
      return this.getElementValue(ID)
        .split(', ')
        .map(Function.prototype.call, String.prototype.trim);
    },
  },
};
</script>

<style lang="postcss">
.tab-active {
  @apply bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium;
}

.tab-inactive {
  @apply text-gray-300 px-3 py-2 rounded-md text-sm font-medium bg-gray-700;
}
</style>
