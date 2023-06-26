const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const { launchGame } = require('../util/game');
const games = require('../jackbox.games.json');
const fs = require('fs');

// Setup will only show the packs they have.

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Choose which jackbox game to play!')
        .addStringOption(option => 
            option.setName('party_pack')
                .setDescription('Pick from the following')
                .addChoices(
                    { name: 'Party Pack 1', value: 'one' },
                    { name: 'Party Pack 2', value: 'two' },
                    { name: 'Party Pack 3', value: 'three' },
                    { name: 'Party Pack 4', value: 'four' },
                    { name: 'Party Pack 5', value: 'five' },
                    { name: 'Party Pack 6', value: 'six' },
                    { name: 'Party Pack 7', value: 'seven' },
                    { name: 'Party Pack 8', value: 'eight' },
                    { name: 'Party Pack 9', value: 'nine' },
                )
        ),
        async execute(interaction) {
            const partypack = interaction.options.getString('party_pack');
            const pack = games.packs[partypack];
            const menu = new StringSelectMenuBuilder()
                .setCustomId('select');
    
                for (const [game, data] of Object.entries(pack)) {
                    const option = new StringSelectMenuOptionBuilder()
                        .setLabel(data.gameName)
                        .setValue(game);
        
                    menu.addOptions(option);
                }
    
            const actionRow = new ActionRowBuilder().addComponents(menu);
    
            await interaction.reply({ content: 'Select a game:', components: [actionRow], ephemeral: true });
        }
}
