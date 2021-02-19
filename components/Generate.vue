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
                <Checkbox
                  id="showOnlyMetalCheck"
                  label="Show only metal"
                  value="checked"
                  tooltip="If this is set to false, the bot will show all prices in the format of [x keys, y ref]. Example: (5 keys, 10 ref). If this is set to true the bot will instead show all prices in the format of [x ref]. Example: (260 ref)."
                />
                <Checkbox
                  id="sortInventoryCheck"
                  label="Sort inventory"
                  value="checked"
                  tooltip="If set to false your bot will not automatically sort its own inventory."
                />
                <Dropdown
                  id="sortInventoryDropdown"
                  label="Sorting type"
                  :options="[
                    { name: 'Name', value: 1 },
                    { name: 'Defindex', value: 2 },
                    { name: 'Rarity', value: 3 },
                    { name: 'Type', value: 4 },
                    { name: 'Date', value: 5 },
                    { name: 'Class', value: 101 },
                    { name: 'Slot', value: 102 },
                  ]"
                  :value="3"
                  tooltip="By default, your bot will sort inventory by rarity."
                />
                <Checkbox
                  id="createListingsCheck"
                  label="Create listings"
                  value="checked"
                  tooltip="If set to false, your bot will not list items for trade while it is running (if changed while your bot is running, this wont work unless restarted)."
                />
                <Checkbox
                  id="addAsFriendCheck"
                  label="Add as a friend"
                  value="checked"
                  tooltip="If set to false, your bot will not allow others to add it as a Steam friend (except admins). FALSE IS NOT RECOMMENDED!"
                />
                <Checkbox
                  id="sendGroupInviteCheck"
                  label="Send group invite"
                  value="checked"
                  tooltip="If set to false, your bot will not invite people to join Steam groups."
                />
                <Checkbox
                  id="autobumpCheck"
                  label="Autobump (auto-relist)"
                  tooltip="If set to true, your bot will re-list all listings every 30 minutes. The bot will fail to re-list items if backpack.tf is down for maintenance or experiencing major outage. Please consider donating to backpack.tf or purchasing backpack.tf premium to enable automatic listing bumping. ENABLING THIS IS NOT RECOMMENDED!"
                />
                <Checkbox
                  id="skipItemsCheck"
                  label="Skip items in trade"
                  value="checked"
                  tooltip="By default, when your bot is constructing an offer (trade partner buy/sell through command), your bot will skip any items that are currently in other active trades. Setting this to false will disable this feature."
                />
                <Checkbox
                  id="wepsCurrencyCheck"
                  label="Weapons as currency"
                  value="checked"
                  tooltip="If set to false, your bot will not value craft/uncraft weapons as currency (0.05 refined)."
                />
                <Checkbox
                  id="wepsCurrencyUncraftCheck"
                  label="Include uncraftable weapons"
                  level="1"
                  value="checked"
                  tooltip="If set to false, your bot will exclude uncraft weapons as currency (0.05 refined)."
                />
                <Checkbox
                  id="fullUsesCheck"
                  label="Full uses check"
                  value="checked"
                  tooltip="These settings determine how items with uses should be processed."
                />
                <Checkbox
                  id="fullUsesDuelCheck"
                  label="Dueling minigame"
                  level="1"
                  value="checked"
                  tooltip="If set to false, your bot will buy Dueling Mini-Games regardless of how many uses are left. Otherwise, it will only accept full Dueling Mini-Games (5 uses left)."
                />
                <Checkbox
                  id="fullUsesNoiseCheck"
                  label="Noise maker"
                  level="1"
                  value="checked"
                  tooltip="If set to false, your bot will buy Noise Makers regardless of how many uses are left. Otherwise, it will only accept full Noise Makers (25 uses left)."
                />
                <Checkbox
                  id="playOnlyTF2Check"
                  label="Display TF2 as running game"
                  tooltip="Set to true if you want your bot to only play Team Fortress 2. Setting this to true will ignore the below option."
                />
                <Input
                  id="playCustomGameInput"
                  label="Custom game name"
                  level="1"
                  tooltip="Name of the custom game you'd like your bot to play. Limited to only 60 characters."
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
                  value="checked"
                  tooltip="Set to false to never send any alerts."
                />
                <SectionSubHeading title="Autokeys Alert Settings" level="1" />
                <Checkbox
                  id="lowPureCheck"
                  label="Low pure alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot is low on keys and ref"
                />
                <Checkbox
                  id="failedToAddCheck"
                  label="Failed to add key alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to add key during an autokeys operation"
                />
                <Checkbox
                  id="failedToUpdateCheck"
                  label="Failed to update key alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to update key during an autokeys operation"
                />
                <Checkbox
                  id="failedToDisableCheck"
                  label="Failed to disable key alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to disable keys during an autokeys operation"
                />
                <SectionSubHeading title="Backpack Alert Settings" level="1" />
                <Checkbox
                  id="backpackFullCheck"
                  label="Backpack full alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to send an offer due to the bot or the trade partner having a full backpack."
                />
                <SectionSubHeading
                  title="High-Value Items Alert Settings"
                  level="1"
                />
                <Checkbox
                  id="gotDisabledCheck"
                  label="Item disabled alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot successfully buys an item with high-value attachment(s) and it gets disabled (only if highValue.enableHold is true)."
                />
                <Checkbox
                  id="notInPricelistCheck"
                  label="Item not in pricelist received alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot successfully buys an invalid item with high-value attachment(s) - this will not automatically add the item to the pricelist."
                />
                <Checkbox
                  id="tryingToTakeCheck"
                  label="Item not in pricelist requested alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the trade partner is trying to take an item with high-value attachment(s) that is not in the bot pricelist."
                />
                <SectionSubHeading
                  title="Auto-Remove Failed Alert Settings"
                  level="1"
                />
                <Checkbox
                  id="removeSellFailedCheck"
                  label="Failed to auto-remove item with intent sell alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when an item is sold with intent sell, and pricelist.autoRemoveIntentSell.enable is true but the bot failed to remove it."
                />
                <SectionSubHeading
                  title="Auto-Add Painted Items Alert Settings"
                  level="1"
                />
                <Checkbox
                  id="addPaintedItemsCheck"
                  label="Failed to auto-add painted item alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when painted items have been successfully added to sell (or when the bot failed to do so)."
                />
                <SectionSubHeading
                  title="Failed To Accept Alert Settings"
                  level="1"
                />
                <Checkbox
                  id="failedAcceptCheck"
                  label="Failed to accept a trade offer alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to accept a trade offer."
                />
                <SectionSubHeading
                  title="Unable To Process Offer Alert Settings"
                  level="1"
                />
                <Checkbox
                  id="unableToProcessCheck"
                  label="Unable to process a trade offer alert"
                  level="1"
                  value="checked"
                  tooltip="Send an alert when the bot fails to process a trade offer."
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
                  tooltip="By default, your bot will list all items in the pricelist. Enabling this option will make it so that your bot will not list items that it cannot afford. (May require a restart to take effect)"
                />
                <Checkbox
                  id="removeIntentSellCheck"
                  label="Auto-remove intent sell"
                  tooltip="By default, any item with intent sell in the pricelist will be automatically removed when the bot no longer has that item. Set this to false to disable this feature."
                />
                <Checkbox
                  id="addInvalidItemsCheck"
                  label="Auto-add invalid items"
                  value="checked"
                  tooltip="If set to false, any accepted invalid items will NOT be automatically added to the pricelist."
                />
                <Checkbox
                  id="addPaintedItemsCheck"
                  label="Auto-add painted items"
                  value="checked"
                  tooltip="If set to false, any accepted items with paint will not be automatically added to the pricelist with intent sell. This feature is only available if your normalize.painted.our is true and normalize.painted.their is false. The bot will set the price to sell by adding the item's auto-priced selling price and  price for paint. You can set your preferred paint price for each paint in detailExtra.painted[paintName].price."
                />
                <Numeric
                  id="priceAgeNumeric"
                  label="Price age (seconds)"
                  step="100"
                  value="28800"
                  tooltip="If an item in the pricelist's last price update exceeds this value, the bot will automatically request a price check for the item from prices.tf (only apply on boot). Default time is 28800 seconds, or 8 hours."
                />
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <SectionHeading
                title="Trade Exception (Bypass) Settings"
                description="These settings determine what types of trades should and shouldn't be accepted."
              />
              <div class="flex flex-col">
                <Checkbox
                  id="allowEscrowCheck"
                  label="Allow trades with escrow (trade hold)"
                  tooltip="If set to true, your bot will allow trades to be held for up to 15 days as a result of the trade partner not having Mobile Authentication enabled."
                />
                <Checkbox
                  id="allowOverpayCheck"
                  label="Allow trades with item/pure overpay"
                  value="checked"
                  tooltip="By default, your bot will allow trade partners to overpay with items or keys/metal (our value more than their value). Set this to false if you want your bot to decline any trades in which it would receive overpay."
                />
                <Checkbox
                  id="allowGiftCheck"
                  label="Allow trades without gift messages"
                  tooltip="If set to true, your bot will accept any gift without the need for the trade partner to include a gift message in the offer message."
                />
                <Checkbox
                  id="allowBannedAccCheck"
                  label="Allow trades from banned/scammer accounts"
                  tooltip="If set to true, your bot will trade with users that are banned on backpack.tf or marked as a scammer on steamrep.com. SETTING THIS TO TRUE IS NOT RECOMMENDED."
                />
              </div>
              <SectionHeading
                title="Trade Summary Settings"
                description="These settings determine what trade summaries should look like."
              />
              <div class="flex flex-col">
                <Checkbox
                  id="showStockChangesCheck"
                  label="Show item stock changes in trade summary"
                  tooltip="By default the summary will not show stock changes."
                />
                <Checkbox
                  id="showTimeTakenCheck"
                  label="Show trade time taken in trade summary"
                  tooltip="Set to true if you want to include time taken to complete the trade in milliseconds."
                />
                <Checkbox
                  id="showItemPricesCheck"
                  label="Show item prices in trade summary"
                  tooltip="Set to false if you don't want to include item prices (buying/selling prices)."
                />
                <Checkbox
                  id="showPureEmojiCheck"
                  label="Show pure using emojis in trade summary"
                  tooltip="Set to true if you want keys, refined, reclaimed, and scrap to be shown as emojis instead of text."
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
                  value="checked"
                  tooltip="By default, whenever your bot accepts items with high valued attachments, it will temporarily be disabled so you can decide whether to manually price it. Set this to false if you want to disable this feature."
                />
                <Input
                  id="highValueSheensInput"
                  label="High-value sheens"
                  placeholder="Team Shine"
                  tooltip="An array of sheens that should be considered high value. Must be a comma separated list of the sheens' full names. If left empty, the bot will hold for all sheens."
                />
                <Input
                  id="highValueKSInput"
                  label="High-value killstreakers"
                  placeholder="Tornado, Fire Horns"
                  tooltip="An array of killstreakers that should be considered high value. Must be a comma separated list of the killstreakers' full names. If left empty, the bot will hold for all killstreakers."
                />
                <Input
                  id="highValuePartsInput"
                  label="High-value strange parts"
                  placeholder="Headshot Kills, Kills"
                  tooltip="An array of strange parts that should be considered high value. Must be a comma separated list of the strange parts' full names. If left empty, the bot will hold for all strange parts."
                />
                <Input
                  id="highValuePaintsInput"
                  label="High-value paints"
                  placeholder="After Eight"
                  tooltip="An array of paints that should be considered high value. Must be a comma separated list of the paints' full names. If left empty, the bot will hold for all paints."
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
                  tooltip="If set to true, your bot will recognize its own Festivized items as its Non-Festivized variant."
                />
                <Checkbox
                  id="theirFestivizedCheck"
                  label="Recognize our partner's Festivized items as their non-Festivized variants"
                  tooltip="If set to true, your bot will recognize other peoples' Festivized items as its Non-Festivized variant."
                />
                <SectionSubHeading
                  title="Strange As Second Quality (Elevated Quality) Items"
                />
                <Checkbox
                  id="ourStrangeSecondQualityCheck"
                  label="Recognize our items with Strange as a second quality as their non-Strange variants"
                  tooltip="If set to true, your bot will recognize its own Strange Unique, Strange Haunted or Strange Unusual as Unique, Haunted and Unusual only - ignoring the ;strange part on item's sku)."
                />
                <Checkbox
                  id="theirStrangeSecondQualityCheck"
                  label="Recognize our partner's items with Strange as a second quality as their non-Strange variants"
                  tooltip="If set to true, your bot will recognize other peoples' Strange Unique, Strange Haunted or Strange Unusual as Unique, Haunted and Unusual only - ignoring the ;strange part on item's sku)."
                />
                <SectionSubHeading title="Painted Items" />
                <Checkbox
                  id="ourPaintedCheck"
                  label="Recognize our painted items as their non-painted variants"
                  value="checked"
                  tooltip="If set to false, your bot will assign painted partial sku on any of its own painted items."
                />
                <Checkbox
                  id="theirPaintedCheck"
                  label="Recognize our partner's painted items as their non-painted variants"
                  value="checked"
                  tooltip="If set to false, your bot will assign painted partial sku on other peoples' painted items."
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
                  value="I am buying your %name% for %price%, I have %current_stock% / %max_stock%."
                  tooltip="This is the note that will be included with each buy order placed on backpack.tf"
                />
                <Input
                  id="listingSellDetailsInput"
                  label="Listing sell note"
                  value="I am selling my %name% for %price%, I am selling %amount_trade%."
                  tooltip="This is the note that will be included with each sell order placed on backpack.tf"
                />
                <SectionSubHeading title="High-Value Item Parameters" />
                <Checkbox
                  id="showSpellsCheck"
                  label="Show spells in listing notes"
                  value="checked"
                  tooltip="Show spell(s) in the listings note."
                />
                <Checkbox
                  id="showStrangePartsCheck"
                  label="Show strange parts in listing notes"
                  tooltip="Show Strange parts (only the one you specified in highValue.strangeParts) in the listings note."
                />
                <Checkbox
                  id="showKillstreakersCheck"
                  label="Show killstreakers in listing notes"
                  value="checked"
                  tooltip="Show killstreaker in the listings note."
                />
                <Checkbox
                  id="showSheensCheck"
                  label="Show sheens in listing notes"
                  value="checked"
                  tooltip="Show Sheen in the listings note."
                />
                <Checkbox
                  id="showPaintedCheck"
                  label="Show paint in listing notes"
                  value="checked"
                  tooltip="Show painted color in the listings note (only for sell orders)."
                />
                <SectionSubHeading title="Custom Uses Parameters" />
                <Input
                  id="listingUsesDuelInput"
                  label="Custom uses parameter for dueling minigames"
                  value="(𝗢𝗡𝗟𝗬 𝗪𝗜𝗧𝗛 𝟱x 𝗨𝗦𝗘𝗦)"
                  tooltip="Custom %uses% parameter."
                />
                <Input
                  id="listingUsesNoiseInput"
                  label="Custom uses parameter for noise makers"
                  value="(𝗢𝗡𝗟𝗬 𝗪𝗜𝗧𝗛 𝟐𝟱x 𝗨𝗦𝗘𝗦)"
                  tooltip="Custom %uses% parameter."
                />
              </div>
              <SectionHeading
                title="Statistics Settings"
                description="These settings act mostly as a checkpoint for your bot when you delete your polldata. You most likely will never need to touch these options"
              />
              <div class="flex flex-col">
                <Numeric
                  id="lastTotalTradesNumeric"
                  label="Last total trades"
                  value="0"
                  tooltip="If you clear out (delete) your polldata.json file, it will reset your total trades count back to zero. This option can be used as an offset to ensure you never lose track of how many trades your bot has completed in total. An example would be if you bot has completed 1000 trades and you want to clear out your polldata.json file. If you set this to 1000, your bot will remember that it has completed 1000 trades in the past."
                />
                <Numeric
                  id="startingTimeInput"
                  label="Starting time (unix timestamp)"
                  value="0"
                  tooltip="Similar to .lastTotalTrades, this option sets the latest instance a trade was made (in Unix Timestamp)."
                />
                <Numeric
                  id="lastTotalProfitNumeric"
                  label="Last total profit made (in refined)"
                  value="0"
                  tooltip="Similar to .lastTotalTrades, but this is for last profit made (value must in refined metal, i.e. 35.44)."
                />
                <Numeric
                  id="lastTotalOverpayNumeric"
                  label="Last total overpay received (in refined)"
                  value="0"
                  tooltip="Similar to .lastTotalProfitMadeInRef, but this is for last profit from overpay (value must in refined metal, i.e. 1000.44)."
                />
                <Numeric
                  id="profitTimestampNumeric"
                  label="Time since last profit (unix timestamp)"
                  value="0"
                  tooltip="Similar to .startingTimeInUnix, this option sets the latest instance a profit was made (in Unix Timestamp)."
                />
                <SectionSubHeading title="Sending Stats Automatically" />
                <Checkbox
                  id="sendAutomatedStatsCheck"
                  label="Regularly send trade statistics"
                  tooltip="Send the content of !stats command every specified hours below"
                />
                <Input
                  id="sendStatsIntervalInput"
                  label="Interval to send stats (THH:MM)"
                  level="1"
                  tooltip='Time (local/timezone - 24 hours) in hour:minute format. Example: ["T23:59"] will send at only 23:59 PM, everyday. Please include that "T" in front of each time, otherwise this wont work. If this is leave empty array ([]) but .enable is true, then it will use default ["T23:59", "T05:59", "T11:59", "T17:59"].'
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
                  tooltip="If set to true, your bot will automatically buy/sell Keys based on the availability of the Pure Metals and Keys in your bot inventory. This is done in an effort to ensure that your bot has enough Pure Metals to perform trades."
                />
                <Numeric
                  id="autokeysMinKeysNumeric"
                  label="Minimum number of keys"
                  level="1"
                  value="3"
                  tooltip="When the bot's current stock of Keys is greater than this value, and the bot's current stock of Pure Metals is less than .minRefined, the bot will start selling Keys in order to convert Keys into Pure Metals. Otherwise, the bot will not sell Keys."
                />
                <Numeric
                  id="autokeysMaxKeysNumeric"
                  label="Maximum number of keys"
                  level="1"
                  value="15"
                  tooltip="When the bot's current stock of Keys is less than this value, and the bot's current stock of Pure Metals is greater than .maxRefined, the bot will start buying Keys in order to convert Pure Metals into Keys. Otherwise, the bot will not buy Keys."
                />
                <Numeric
                  id="autokeysMinRefNumeric"
                  label="Minimum amount of refined"
                  level="1"
                  value="30"
                  tooltip="The minimum number of Pure Metals the bot can have before it begins selling Keys (to turn Keys into Pure Metals). See .minKeys for more information."
                />
                <Numeric
                  id="autokeysMaxRefNumeric"
                  label="Maximum amount of refined"
                  level="1"
                  value="150"
                  tooltip="The maximum number of Pure Metals the bot can have before it begins buying Keys (to turn Pure Metals into Keys). See .maxKeys for more information."
                />
                <SectionSubHeading title="Autokeys Banking" level="1" />
                <Checkbox
                  id="autokeysBankCheck"
                  label="Enable autokeys banking"
                  level="1"
                  tooltip="If set to true, your bot will bank (buy and sell) Keys. If your bot's current Pure Metals supply is between .minRefined and .maxRefined and Keys > .minKeys, it will bank Keys. autokeys.enable must be set to true to enable this option."
                />
                <SectionSubHeading
                  title="Autokeys Scrap Adjustment"
                  level="1"
                />
                <Checkbox
                  id="autokeysScrapAdjustCheck"
                  label="Enable autokeys scrap adjustment"
                  level="1"
                  tooltip='If set to true, the bot will make adjustments to the price of Keys when selling or buying. For example, if the current Keys price is "10 refined", the bot will take "10 refined" and add .value when buying, and subtract .value when selling. This is done in an effort to quickly buy and sell Keys using Autokeys when in a pinch by paying more for Keys and selling Keys for less. This is not possible to do when key banking (autokeys.banking.enable set to true).'
                />
                <Numeric
                  id="autokeysMaxRefNumeric"
                  label="Maximum amount of scrap to adjust by"
                  level="2"
                  value="1"
                  tooltip="This is the amount of scrap (0.11 refined) the bot will increase the buy listing or decrease the sell listing when buying/selling Keys using Autokeys (if .enable is set to true)."
                />
                <SectionSubHeading
                  title="Autokeys Accept Understocked"
                  level="1"
                />
                <Checkbox
                  id="autokeysUnderCheck"
                  label="Enable autokeys accepting understocked trades"
                  level="1"
                  tooltip="If set to true, your bot will accept trades that will lead to keys become under-stocked."
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
                  value="checked"
                  tooltip="Setting this to to false will prevent your bot from automatically crafting any duplicated/class-matched craftable weapons into scrap. The pricelist takes priority over this config item. That is to say, if a craft weapon is in the pricelist, it will not be crafted into scrap."
                />
                <SectionSubHeading title="Metal Smelting Settings" />
                <Checkbox
                  id="metalSmeltingCheck"
                  label="Enable the crafting/smelting of metals into other denominations"
                  value="checked"
                  tooltip="Setting this to false will disable metal crafting entirely. This may cause your bot and the trade partner to not be able to trade because of missing pure. SETTING THIS TO FALSE IS NOT RECOMMENDED."
                />
                <Numeric
                  id="minScrapNumeric"
                  label="Minimum amount of scrap metal to hold"
                  level="1"
                  value="9"
                  tooltip="If your bot has less Scrap Metal than this amount, it will smelt down Reclaimed Metal to maintain ample Scrap Metal supply."
                />
                <Numeric
                  id="minRecNumeric"
                  label="Minimum amount of reclaimed metal to hold"
                  level="1"
                  value="9"
                  tooltip="If your bot has less Reclaimed Metal than this amount, it will smelt down Refined Metal to maintain ample Reclaimed Metal supply."
                />
                <Numeric
                  id="smeltThresholdNumeric"
                  label="Upgrade metal to next denomination threshold"
                  level="1"
                  value="9"
                  tooltip="If the bot's Scrap/Reclaimed Metal count has reached the minimum amount, and Scrap/Reclaimed Metal count has reached this threshold [in other words, Scrap/Reclaimed Metal count is greater than (min + threshold)], it will combine the metal into the next highest denomination."
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
                  label="Auto-decline trades with invalid values"
                  value="checked"
                />
                <Input
                  id="invalidValueSKUInput"
                  label="SKUs that should bypass invalid value"
                  level="1"
                />
                <Numeric
                  id="invalidValueBypassNumeric"
                  label="Value difference of a bypass SKU for it to bypass invalid value (in ref)"
                  level="1"
                  value="0"
                />
                <Input
                  id="invalidValueMessageInput"
                  label="Custom invalid value decline message"
                />
                <SectionSubHeading title="Invalid Item Offers" />
                <Checkbox
                  id="invalidItemDeclineCheck"
                  label="Auto-decline trades with invalid items"
                />
                <Checkbox
                  id="invalidItemPriceCheck"
                  label="Give invalid items prices (from prices.tf)"
                  level="1"
                />
                <Checkbox
                  id="invalidItemOverpayCheck"
                  label="Automatically accept invalid items if overpay"
                  level="1"
                  value="checked"
                />
                <Input
                  id="invalidItemMessageInput"
                  label="Custom invalid item decline message"
                />
                <SectionSubHeading title="Disabled Item Offers" />
                <Checkbox
                  id="disabledItemDeclineCheck"
                  label="Auto-decline trades with disabled items"
                />
                <Checkbox
                  id="disabledItemOverpayCheck"
                  label="Automatically accept disabled items if overpay"
                  level="1"
                />
                <Input
                  id="disabledItemMessageInput"
                  label="Custom disabled item decline message"
                />
                <SectionSubHeading title="Overstocked Item Offers" />
                <Checkbox
                  id="overstockedItemDeclineCheck"
                  label="Auto-decline trades with overstocked items"
                />
                <Checkbox
                  id="overstockedItemOverpayCheck"
                  label="Automatically accept overstocked items if overpay"
                  level="1"
                />
                <Input
                  id="overstockedItemMessageInput"
                  label="Custom overstocked item decline message"
                />
                <SectionSubHeading title="Understocked Item Offers" />
                <Checkbox
                  id="understockedItemDeclineCheck"
                  label="Auto-decline trades with understocked items"
                />
                <Checkbox
                  id="understockedItemOverpayCheck"
                  label="Automatically accept understocked items if overpay"
                  level="1"
                />
                <Input
                  id="understockedItemMessageInput"
                  label="Custom understocked item decline message"
                />
                <SectionSubHeading title="Duped Item Offers" />
                <Checkbox
                  id="dupedItemCheck"
                  label="Check for duped items in trade offers"
                  value="checked"
                />
                <Numeric
                  id="dupedMinKeysNumeric"
                  label="Minimum number of keys an item must be worth before it is dupe checked"
                  level="1"
                  value="10"
                />
                <Checkbox
                  id="dupedItemDeclineCheck"
                  label="Automatically decline trades with duped items"
                  level="1"
                />
                <Input
                  id="dupedItemMessageInput"
                  label="Custom duped item decline message"
                  level="1"
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
                  value="checked"
                />
                <SectionSubHeading
                  title="Manual Review General Settings"
                  level="1"
                />
                <Checkbox
                  id="reviewSummaryCheck"
                  label="Show trade summaries for offers held in review to the trade partner"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewNoteCheck"
                  label="Show hold reasons for offers held in review"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewTimeCheck"
                  label="Show the owner's current time to the trade partner when a trade is held for review"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewPriceCheck"
                  label="Show the prices of items that are held for review"
                  level="1"
                  value="checked"
                />
                <SectionSubHeading
                  title="Invalid Value Review Settings"
                  level="1"
                />
                <Input
                  id="reviewValueNoteInput"
                  label="Note provided to the trade partner when a trade is held due to invalid value"
                  level="1"
                />
                <SectionSubHeading
                  title="Invalid Items Review Settings"
                  level="1"
                />
                <Input
                  id="reviewItemsNoteInput"
                  label="Note provided to the trade partner when a trade is held due to invalid items"
                  level="1"
                />
                <SectionSubHeading
                  title="Disabled Items Review Settings"
                  level="1"
                />
                <Input
                  id="reviewDisabledNoteInput"
                  label="Note provided to the trade partner when a trade is held due to disabled items"
                  level="1"
                />
                <SectionSubHeading
                  title="Overstocked Items Review Settings"
                  level="1"
                />
                <Input
                  id="reviewOverstockedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to overstocked items"
                  level="1"
                />
                <SectionSubHeading
                  title="Understocked Items Review Settings"
                  level="1"
                />
                <Input
                  id="reviewUnderstockedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to understocked items"
                  level="1"
                />
                <SectionSubHeading
                  title="Duped Items Review Settings"
                  level="1"
                />
                <Input
                  id="reviewDupedNoteInput"
                  label="Note provided to the trade partner when a trade is held due to duped items"
                  level="1"
                />
                <SectionSubHeading title="Other Review Settings" level="1" />
                <Input
                  id="reviewDupeFailNoteInput"
                  label="Note provided to the trade partner when a trade is held due to a dupe check failure"
                  level="1"
                />
                <Input
                  id="reviewEscrowNoteInput"
                  label="Note provided to the trade partner when a trade is held due to an escrow check failure"
                  level="1"
                />
                <Input
                  id="reviewBanNoteInput"
                  label="Note provided to the trade partner when a trade is held due to a banned check failure"
                  level="1"
                />
                <Input
                  id="reviewCustomNoteInput"
                  label="Custom note provided to the trade partner for all manual review holds"
                  level="1"
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
                  value="9171753"
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
                  value="checked"
                />
                <Input
                  id="summaryURLInput"
                  label="Trade summary webhook URL"
                  level="1"
                />
                <Checkbox
                  id="summaryLinksCheck"
                  label="Show trade partner quick links in summaries"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="summaryKeyRateCheck"
                  label="Show the bot's key rate in summaries"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="summaryPureCheck"
                  label="Show the bot's pure stock in summaries"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="summaryInventoryCheck"
                  label="Show bot's inventory statistics in summaries"
                  level="1"
                  value="checked"
                />
                <Input
                  id="summaryNoteInput"
                  label="Custom notes that should be included in summaries"
                  level="1"
                />
                <Checkbox
                  id="mentionEnableCheck"
                  label="Mention the owner when sending trade summaries"
                  level="1"
                />
                <Input
                  id="mentionSKUInput"
                  label="The bot should mention the owner when a trade contains these SKUs"
                  level="2"
                />
                <Numeric
                  id="mentionValueNumeric"
                  label="Mention for any trades higher than this value (in ref)"
                  level="2"
                  value="0"
                />
                <SectionSubHeading title="Trade Offer Review Settings" />
                <Checkbox
                  id="discordReviewCheck"
                  label="Enable discord webhook message for manual reviews"
                  value="checked"
                />
                <Input
                  id="reviewURLInput"
                  label="Manual review webhook URL"
                  level="1"
                />
                <Checkbox
                  id="reviewInvalidCheck"
                  label="Mention the owner for invalid value manual reviews"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewMentionCheck"
                  label="Mention the owner for general manual reviews"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewLinksCheck"
                  label="Show trade partner quick links in manual reviews"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewKeyRateCheck"
                  label="Show the bot's key rate in manual reviews"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewPureCheck"
                  label="Show the bot's pure stock in manual reviews"
                  level="1"
                  value="checked"
                />
                <Checkbox
                  id="reviewInventoryCheck"
                  label="Show bot's inventory statistics in manual reviews"
                  level="1"
                  value="checked"
                />
                <SectionSubHeading title="Message Settings" />
                <Checkbox
                  id="messageCheck"
                  label="Enable alerts for messages sent to the bot"
                  value="checked"
                />
                <Checkbox
                  id="messageMentionCheck"
                  label="Mention the owner on new messages"
                  level="1"
                  value="checked"
                />
                <Input
                  id="messageURLInput"
                  label="Message webhook URL"
                  level="1"
                />
                <Checkbox
                  id="messageLinksCheck"
                  label="Show trade partner quick links on new messages"
                  level="1"
                  value="checked"
                />
                <SectionSubHeading title="Price Update Settings" />
                <Checkbox
                  id="priceUpdateCheck"
                  label="Enable discord webhook price updates"
                  value="checked"
                />
                <Input
                  id="updateURLInput"
                  label="Price update webhook URL"
                  level="1"
                />
                <Input
                  id="updateNoteInput"
                  label="Custom notes that should be included in price updates"
                  level="1"
                />
                <SectionSubHeading title="Alert Settings" />
                <Checkbox
                  id="discordAlertCheck"
                  label="Enable discord webhook alerts"
                  value="checked"
                />
                <Checkbox
                  id="alertMentionCheck"
                  label="Mention the owner when there is an alert"
                  level="1"
                  value="checked"
                />
                <Input id="alertURLInput" label="Alert webhook URL" level="1" />
                <SectionSubHeading title="Statistics Settings" />
                <Checkbox
                  id="discordStatsCheck"
                  label="Enable discord webhook statistics"
                />
                <Input id="statsURLInput" label="Stats webhook URL" level="1" />
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
          Generate Options
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

        // Manual Review Settings / manualReview

        optionsJSON.manualReview.enable = this.getElementChecked('reviewCheck');
        if (optionsJSON.manualReview.enable) {
          optionsJSON.manualReview.showOfferSummary = this.getElementChecked(
            'reviewSummaryCheck'
          );
          optionsJSON.manualReview.showReviewOfferNote = this.getElementChecked(
            'reviewNoteCheck'
          );
          optionsJSON.manualReview.showOwnerCurrentTime = this.getElementChecked(
            'reviewTimeCheck'
          );
          optionsJSON.manualReview.showItemPrices = this.getElementChecked(
            'reviewPriceCheck'
          );

          optionsJSON.manualReview.invalidValue.note = this.getElementValue(
            'reviewValueNoteInput'
          );
          optionsJSON.manualReview.invalidItems.note = this.getElementValue(
            'reviewItemsNoteInput'
          );
          optionsJSON.manualReview.disabledItems.note = this.getElementValue(
            'reviewDisabledNoteInput'
          );
          optionsJSON.manualReview.overstocked.note = this.getElementValue(
            'reviewOverstockedNoteInput'
          );
          optionsJSON.manualReview.understocked.note = this.getElementValue(
            'reviewUnderstockedNoteInput'
          );
          optionsJSON.manualReview.duped.note = this.getElementValue(
            'reviewDupedNoteInput'
          );

          optionsJSON.manualReview.dupedCheckFailed.note = this.getElementValue(
            'reviewDupeFailNoteInput'
          );
          optionsJSON.manualReview.escrowCheckFailed.note = this.getElementValue(
            'reviewEscrowNoteInput'
          );
          optionsJSON.manualReview.bannedCheckFailed.note = this.getElementValue(
            'reviewBanNoteInput'
          );
          optionsJSON.manualReview.additionalNotes = this.getElementValue(
            'reviewCustomNoteInput'
          );
        }

        // Discord Webhook Settings / discordWebhook

        optionsJSON.discordWebhook.ownerID = this.getElementValue(
          'webhookOwnerIDInput'
        );
        optionsJSON.discordWebhook.displayName = this.getElementValue(
          'webhookNameInput'
        );
        optionsJSON.discordWebhook.avatarURL = this.getElementValue(
          'webhookAvatarInput'
        );
        optionsJSON.discordWebhook.embedColor = this.getElementValue(
          'webhookColorInput'
        );

        optionsJSON.discordWebhook.tradeSummary.enable = this.getElementChecked(
          'discordSummaryCheck'
        );
        if (optionsJSON.discordWebhook.tradeSummary.enable) {
          optionsJSON.discordWebhook.tradeSummary.url = this.getStringArray(
            'summaryURLInput'
          );
          optionsJSON.discordWebhook.tradeSummary.misc.showQuickLinks = this.getElementChecked(
            'summaryLinksCheck'
          );
          optionsJSON.discordWebhook.tradeSummary.misc.showKeyRate = this.getElementChecked(
            'summaryKeyRateCheck'
          );
          optionsJSON.discordWebhook.tradeSummary.misc.showPureStock = this.getElementChecked(
            'summaryPureCheck'
          );
          optionsJSON.discordWebhook.tradeSummary.misc.showInventory = this.getElementChecked(
            'summaryInventoryCheck'
          );
          optionsJSON.discordWebhook.tradeSummary.misc.note = this.getElementValue(
            'summaryNoteInput'
          );

          optionsJSON.discordWebhook.tradeSummary.mentionOwner.enable = this.getElementChecked(
            'mentionEnableCheck'
          );
          optionsJSON.discordWebhook.tradeSummary.mentionOwner.itemSkus = this.getStringArray(
            'mentionSKUInput'
          );
          optionsJSON.discordWebhook.tradeSummary.mentionOwner.tradeValueInRef = this.getElementIntValue(
            'mentionValueNumeric'
          );
        }

        optionsJSON.discordWebhook.offerReview.enable = this.getElementChecked(
          'discordReviewCheck'
        );
        if (optionsJSON.discordWebhook.offerReview.enable) {
          optionsJSON.discordWebhook.offerReview.url = this.getElementValue(
            'reviewURLInput'
          );
          optionsJSON.discordWebhook.offerReview.mentionInvalidValue = this.getElementChecked(
            'reviewInvalidCheck'
          );
          optionsJSON.discordWebhook.offerReview.isMention = this.getElementChecked(
            'reviewMentionCheck'
          );

          optionsJSON.discordWebhook.offerReview.misc.showQuickLinks = this.getElementChecked(
            'reviewLinksCheck'
          );
          optionsJSON.discordWebhook.offerReview.misc.showKeyRate = this.getElementChecked(
            'reviewKeyRateCheck'
          );
          optionsJSON.discordWebhook.offerReview.misc.showPureStock = this.getElementChecked(
            'reviewPureCheck'
          );
          optionsJSON.discordWebhook.offerReview.misc.showInventory = this.getElementChecked(
            'reviewInventoryCheck'
          );
        }

        optionsJSON.discordWebhook.messages.enable = this.getElementChecked(
          'messageCheck'
        );
        if (optionsJSON.discordWebhook.messages.enable) {
          optionsJSON.discordWebhook.messages.isMention = this.getElementChecked(
            'messageMentionCheck'
          );
          optionsJSON.discordWebhook.messages.url = this.getElementValue(
            'messageURLInput'
          );
          optionsJSON.discordWebhook.messages.showQuickLinks = this.getElementChecked(
            'messageLinksCheck'
          );
        }

        optionsJSON.discordWebhook.priceUpdate.enable = this.getElementChecked(
          'priceUpdateCheck'
        );
        if (optionsJSON.discordWebhook.priceUpdate.enable) {
          optionsJSON.discordWebhook.priceUpdate.url = this.getElementValue(
            'updateURLInput'
          );
          optionsJSON.discordWebhook.priceUpdate.note = this.getElementValue(
            'updateNoteInput'
          );
        }

        optionsJSON.discordWebhook.sendAlert.enable = this.getElementChecked(
          'discordAlertCheck'
        );
        if (optionsJSON.discordWebhook.sendAlert.enable) {
          optionsJSON.discordWebhook.sendAlert.isMention = this.getElementChecked(
            'alertMentionCheck'
          );
          optionsJSON.discordWebhook.sendAlert.url = this.getElementValue(
            'alertURLInput'
          );
        }

        optionsJSON.discordWebhook.sendStats.enable = this.getElementChecked(
          'discordStatsCheck'
        );
        if (optionsJSON.discordWebhook.sendStats.enable) {
          optionsJSON.discordWebhook.sendStats.url = this.getElementValue(
            'statsURLInput'
          );
        }

        // Download the generated options file
        var dataStr =
          'data:text/json;charset=utf-8,' +
          encodeURIComponent(JSON.stringify(optionsJSON, null, 4));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'options.json');
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();

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
      var elementValue = this.getElementValue(ID);

      if (elementValue === '') {
        return [];
      } else {
        return elementValue
          .split(', ')
          .map(Function.prototype.call, String.prototype.trim);
      }
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
