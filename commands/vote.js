import { SlashCommandBuilder } from "discord.js";


module.exports = {
    data: new SlashCommandBuilder()
    .setName('startvote')
    .setDescription('Start a vote on which game!'),
    
    async execute(interaction) {

    }
}   