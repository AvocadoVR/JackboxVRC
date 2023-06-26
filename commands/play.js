const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Choose which jackbox game to play!')
        .addStringOption(option => 
            option.setName('game')
                .setDescription('Pick from the following')
                .addChoices(
                    { name: 'Test', value: 'test' },
                    { name: 'Test 2', value: 'test2e' }
                )
        ),
    async execute(interaction) {
        await interaction.reply({ content: "Done", ephemeral: true})
    }
}