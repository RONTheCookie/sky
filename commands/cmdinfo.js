module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a command name to view.');
        const meta = require(`../commands/${args[0].toLowerCase()}`).meta;
        const m = await msg.channel.send('<a:skyloading:397962260540293120> Fetching command data...');
        const infoMsg = [
            `\\❓ **__Command Info:__** ${meta.name} \\❓`,
            ``,
            `**Owner Only?** ${meta.ownerOnly ? 'Yes' : 'No'}`,
            `**Description:** ${meta.description}`,
            `**Usage:** ${client.config.prefix}${meta.name} ${meta.usage}`
        ].join('\n');
        m.edit(infoMsg);
    },
    meta: {
        name: 'cmd',
        ownerOnly: false,
        description: 'Returns information about the specified command.',
        usage: '<%command name%>'
    }
}