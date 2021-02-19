# tf2autobot-config

_A simple config generator for [TF2Autobot](https://github.com/TF2Autobot/tf2autobot)._

[Live Site](https://bonfire.github.io/tf2autobot-config/) • [Issues](https://github.com/Bonfire/tf2autobot-config/issues) • [Stargazers](https://github.com/Bonfire/tf2autobot-config/stargazers)

## About

TF2Autobot-Config is a simple config generator for [Team Fortress 2](https://www.teamfortress.com/) trading bots run under the [TF2Autobot](https://github.com/TF2Autobot/tf2autobot) project. Part of setting up your bot is configuring it to your liking, and making your bot personalized to your wants and need. The setup process is a pain due to the extensive JSON file that must be tweaked.

This project aims to make the bot configuration process as easy and painless as possible.

If you have any trouble with the config generator, please contact us on the [TF2Autobot Discord](https://discord.gg/78ZKRB4BTr)

## Getting Started

1. Navigate to the live [TF2Autobot Config](https://bonfire.github.io/tf2autobot-config/) site

2. Change the options to your liking

   > Note: Each option has a tooltip (which can be viewed by hovering) to provide more context as to what the option does

3. Click the "Generate Config" button at the bottom to generate and save your new config

4. Place (or copy and paste) your generated `options.json` file into your bot's `files/<bot username>/` directory

   > **Ensure that your bot is offline prior to making any changes to your bot's `options.json` file!**

   > Note: If an `options.json` file already exists for your bot, this will overwrite the existing file.

If you have any questions as to what the different settings do (and the tooltips don't help), please be sure to check out the [TF2Autobot Wiki](https://github.com/TF2Autobot/tf2autobot/wiki/Configure-your-options.json-file).

## Technologies Used

- [Vue.js](https://vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Hint.css](https://github.com/chinchang/hint.css)

## Credits

- Thank you to [cfg.tf](https://cfg.tf/) for their inspiration
