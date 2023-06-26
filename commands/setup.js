import { SlashCommandBuilder } from "discord.js";

// Temp. Plan to create a website.

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Setup the bot!'),
    
    async execute(interaction) {

    }
}