module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a command to execute.');
        require('child_process').exec(args.join(' '), (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            msg.channel.send(`\\📤 **Output:**\n\n${stdout.substring(1500) || stderr.substring(1500)}`);
        });
    },
    meta: {
        name: 'exec',
        ownerOnly: true,
        description: 'Executes a terminal command through the bot.',
        usage: '<%command%>'
    }
}