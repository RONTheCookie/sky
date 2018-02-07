module.exports = {
    run: async (client, msg, args) => {
        if (!args[0]) return msg.channel.send('\\❌ Please provide a command to execute.');
        require('child_process').exec(args.join(' '), (error, stdout, stderr) => {
            if (error) {
                msg.channel.send(error);
                return console.error(error);
            }
            msg.channel.send(stdout.slice(0, 1500), { code: 'js' });
        });
    },
    meta: {
        name: 'exec',
        ownerOnly: true,
        description: 'Executes a terminal command through the bot.',
        usage: '<%command%>'
    }
}